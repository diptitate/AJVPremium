const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config()

const cookieParser = require('cookie-parser')
const router = require('./routes')
const path = require("path");


const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin : 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials : true
}))


// Handle OPTIONS requests for preflight
app.options('*', cors());


app.use('/api', router)

//----------------------Deployment------------------------------------//
const __dirname1 = path.resolve()

app.use(express.static(path.join(__dirname1, "/ajv/dist")))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname1, "ajv", "dist", "index.html"))
  })
//----------------------Deployment-------------------------------------//

const PORT = 8085 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,'0.0.0.0',()=>{
       console.log("connnect to DB")
        console.log("Server is running ")
  })
 }) 

