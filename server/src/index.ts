import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { dbConnect } from './config/dbConnect'
dotenv.config()



//middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

//router


//server listen

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
    dbConnect()
})