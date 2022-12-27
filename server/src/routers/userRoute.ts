import express from 'express'

const userRoute = express.Router()
userRoute.get('/', ()=>{
    console.log('this is user Router')
})
export default userRoute