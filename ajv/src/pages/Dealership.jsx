import React, {useContext, useState} from "react"

import { Link, useNavigate} from 'react-router-dom'
import SummaryApi from "../common/index.jsx"
import { toast } from 'react-toastify'
import Context from "../context"
import dealershipimg from '../assets/charging-station.png'


const Dealership = () => {
    //const [showPassword, setShowPassword] = useState(false)
    const [data,setData] = useState({
        name: "",
        email : "",
        contact : "",
        city: ""
    })

    const navigate = useNavigate()

    const { fetchUserDetails } = useContext(Context)

    //console.log('generalContext', generalContext.fetchUserDetails())

    const handleChange = (e) => {
        const {name, value} = e.target

        setData((prev) => {
            return{
                ...prev,
                [name] : value
            }
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
        
            navigate('/')
            fetchUserDetails()
            //fetchUserAddToCart()
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }

    }

    console.log("data login", data)


    return(
        <div id='login'>
            <div className="w-full flex md:flex-col lg:flex-row">
            <div  className="md:w-full lg:w-1/2 dealership bg-cover bg-no-repeat h-screen" style={{backgroundImage: `url(${dealershipimg})`}}></div>
            <div className="md:w-full lg:w-1/2 bg-slate-200">
                <div className='mx-auto container p-4 form_div'>

                    <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                            {/*--------
                            <div className='w-20 h-20 mx-auto'>
                                <img src={loginIcons} alt='login icons'/>
                            </div>
                            -------*/}
                            <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                                <div className='grid form-group'>
                                    <label>Name </label>
                                    <div className=''>
                                        <input 
                                            type='text' 
                                            placeholder='Enter your name' 
                                            name='name'
                                            value={data.name}
                                            onChange={handleChange}
                                            required
                                            className='w-full form-control'/>
                                    </div>
                                </div>
                                <div className='grid form-group'>
                                    <label>Email </label>
                                    <div className=''>
                                        <input 
                                            type='email' 
                                            placeholder='Enter your email id' 
                                            name='email'
                                            value={data.email}
                                            onChange={handleChange}
                                            className='w-full h-full outline-none bg-transparent form-control'/>
                                    </div>
                                </div>
                                <div className='grid form-group'>
                                    <label>Contact Number </label>
                                    <div className=''>
                                        <input 
                                            type='text' 
                                            placeholder='Enter your contact number' 
                                            name='contact'
                                            value={data.contact}
                                            onChange={handleChange}
                                            className='w-full h-full outline-none bg-transparent form-control'/>
                                    </div>
                                </div>
                                <div className='grid form-group'>
                                    <div className="flex flex-row">
                                        <div className="p-1">
                                            <label>City</label>
                                            <div className=''>
                                                <input 
                                                    type='text' 
                                                    placeholder='Enter your city' 
                                                    name='city'
                                                    value={data.city}
                                                    onChange={handleChange}
                                                    className='w-full h-full outline-none bg-transparent form-control'/>
                                            </div>
                                        </div>

                                        <div className="p-1">
                                            <label>Pincode </label>
                                            <div className=''>
                                                <input 
                                                    type='text' 
                                                    placeholder='Enter your city' 
                                                    name='city'
                                                    value={data.city}
                                                    onChange={handleChange}
                                                    className='w-full h-full outline-none bg-transparent form-control'/>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                {/*-----------
                                <div>
                                    <label>Password : </label>
                                    <div className='bg-slate-100 p-2 flex'>
                                        <input 
                                            type={showPassword ? "text" : "password"}
                                            placeholder='enter password'
                                            value={data.password}
                                            name='password'
                                            onChange={handleChange}
                                            className='w-full h-full outline-none bg-transparent'/>
                                        
                                        <div className='cursor-pointer text-xl' onClick={() => setShowPassword((prev) => !prev )}>
                                            <span>
                                                {
                                                    showPassword ? (
                                                        <FaEyeSlash/>
                                                    )
                                                    : 
                                                    (
                                                        <FaEye/>
                                                    )
                                                }
                                            </span>
                                        </div>
                                        
                                    </div>
                                    <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                        Forgot password ?
                                    </Link>
                                </div>
                                --------*/}

                                <button className='bg-black  text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Submit</button>

                            </form>

                    </div>
                </div>  
            </div>
            </div>
            
        </div>        
    )
}
export default Dealership