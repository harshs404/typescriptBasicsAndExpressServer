import { Request , Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export class DBController{
    //Controller=>Repo of our important methods and state

    static async showAdminData(req: Request,res: Response){
        let secretKey = process.env.JWT_KEY as string;
        let token = req.headers.authorization as string;
        if(token==="secretDataOfAdmin"){ // in case we want to give someone admin Access only we can use special tokens instead of jwt
            return res.send({
                data:"Some Confidential Data",
                recieved:true,
            })
        }else{
            return res.send({
                data:null,
                recieved:false,
            })
        }
    }

    static async showData(req: Request,res: Response){
        let secretKey = process.env.JWT_KEY as string;
        let token = req.headers.authorization as string;

        jwt.verify(token,secretKey,(error:any,data:any)=>{
            if(error){
                return res.send({
                    data:error, // in error always send back non-null data
                    recieved:false,
                })
            }else{
                return res.send({
                    data:data,
                    recieved: true,
                })
            }
        })
    }


    static async signup(req: Request,res: Response){
        let secretKey = process.env.JWT_KEY as string;
        let {username,useremail}=req.body
        console.log(username);

        jwt.sign({ //this method will create JWT for us
            useremail:useremail //user credentials are passed as payload
        },
        secretKey, // secret key
        {
            expiresIn: "2h", // expiry of secret key
        },
        (error: any , jwtData : any)=>{
            if(error) {
                return res.send({
                data : error,
                created : false,
            });
        }
            console.log(jwtData);
            return res.send({
                data : jwtData,
                created : true,
            });
            
        }
        );

        // return res.send({
        //     username:username,
        //     useremail:useremail,
        //     submitted:true,
        //     //all above 3 are case sensitive(all the thing that we've written to send back  response)
        // })
    }
}

// this was a way of sending post request to our postman fro our server...we will use this to send data to database and get response in return

//20 min done...in moring do it fast...4 lectures khali hn morning me....sit to do asap