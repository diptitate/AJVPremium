const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')


async function userSignUpController(req,res){
    try{

        const { email, password, name} = req.body

        //console.log('req.body', req.body)
        const user = await userModel.findOne({email})

        if(user){
            throw new Error("Already user exits.")
        }

        if(!email){
            throw new Error("Please provide email")
         }
         if(!password){
             throw new Error("Please provide password")
         }
         if(!name){
             throw new Error("Please provide name")
         }


         const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)   //for hashing password

        if(!hashPassword){
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            role : "GENERAL",    //for all users
            password : hashPassword
        }

         const userData = new userModel(payload)
         const saveUser = await userData.save()

         //const userModel = mongooose.model('user', userSchema)
         res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully!"
        })


    }catch(err){
        
        res.json({
            message: err.message || err ,
            error: true,
            success: false
            
        })
    }
}

module.exports = userSignUpController