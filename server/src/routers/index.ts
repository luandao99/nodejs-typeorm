import userRoute from "./userRoute"
const initRoute = (app:any)=>{
    //middleware router
    app.use('api/v1/user', userRoute)
}
export default initRoute