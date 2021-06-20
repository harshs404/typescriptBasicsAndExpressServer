//1 hr beyond Day 6 video...Mongo+nodeJS tutorial

import {Request,Response} from "express";
import { User } from "../models/mongodb_model";

export class MongoDBController{
  //create operation
    static async createData(req:Request,res:Response){
        let {username,useremail} = req.body;
        let user = new User({
            username:username,
            useremail:useremail,
        });
        user.save().then((data:any)=>{
            return res.send({
                data:data,
                submitted:true,
            });
        }).catch((error:any)=>{
            return res.send({
                data:error,
                submitted:false,
            });
        });
    }
//read operation
    static async readData(req:Request,res:Response){
        await User.find()
        .then((data:any)=>{
            return res.send({
                data:data,
                recieved:true,
            });
        }).catch((error:any)=>{
            return res.send({
                data:error,
                recieved:false,
            });
        }); 
    }
 //update operation
 static async updateData(req:Request,res:Response){
    let {userid,username,useremail}=req.body;
    await User.findOneAndUpdate({
        //Filter
        _id:userid,
    },
    {
        //update fields
        username:username,
        useremail:useremail,
    },{
        useFindAndModify:true,
    }
    )
    .then((data:any)=>{
        return res.send({
            // data:data,(it will not show any data)
            updated:true,
        });
    }).catch((error:any)=>{
        return res.send({
            // data:error,(it will not show any data)
            updated:false,
        });
    });
    }
//Delete operation
 static async deleteData(req:Request,res:Response){
    let {userid} = req.params;
    await User.findOneAndDelete(
      {
          _id: userid,
      }
    )
    .then((data:any)=>{
        return res.send({
            // data:data,(it will not show any data)
            deleted:true,
        });
    }).catch((error:any)=>{
        return res.send({
            // data:error,(it will not show any data)
            deleted:false,
        });
    });
    }
    //  exists method...or...operation
    //to check if a certain record is in the mongoDB database, we don't need to scan every record...we can directly use exists property in mongoDB 
    static async checkIfExists(req:Request,res:Response){
        let {username} = req.body;
        await User.exists(
          {
              username:username,
          }
        )
        .then((data:any)=>{
            return res.send({
                // data:data,(it will not show any data)
                exists:data,
            });
        }).catch((error:any)=>{
            return res.send({
                // data:error,(it will not show any data)
                exists:false,
            });
        });
        }
     
}