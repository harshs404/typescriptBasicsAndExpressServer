import express from 'express'
import dotenv from 'dotenv'
import {router} from './routes/routes'
dotenv.config();
const app =express();
const port=process.env.PORT;
app.set("port",port); //set is here a map
app.get("/",(req,res)=>{ // in here we can provide for routes
    res.send({
        verified:false,
        data:"Harsh",
    })
    
    //res.send("flutter bootcamp");
});
app.use("/home",router) // we can use this to define multiple routes at one place
app.listen(app.get("port"),()=>{
    console.log(`server is runing over port of ${app.get("port")}`);
});

//suppose when we deploy app on heroku, it gives certain port numbers, for it we use dotenv..when we deploy on heroku, value in env.PORT becomes handy