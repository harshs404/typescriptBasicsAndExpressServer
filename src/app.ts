import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {router} from './routes/routes'
dotenv.config();
const app =express();
app.use(express.json()) // we can directly use this to parse the body instead of body parser
app.use(express.urlencoded({
    extended:false
}))
const port=process.env.PORT;
const mongoDB_url =process.env.MONGODB_URL as string;
app.set("port",port); //set is here a map
mongoose.connect(
    mongoDB_url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
    },()=>{
        console.log("Database is connected");
    }
)
app.use("/",router) // we can use this to define multiple routes at one place
app.listen(app.get("port"),()=>{
    console.log(`server is runing over port of ${app.get("port")}`);
});

//suppose when we deploy app on heroku, it gives certain port numbers, for it we use dotenv..when we deploy on heroku, value in env.PORT becomes handy
//installed json web token, it helps us in authentication...we can also use cookies to store web data(cookies are stored in browser)