import mongoose,{Document, Schema} from "mongoose"

//interface defines type of ducment that mongoDB has
interface MongoDBInterface extends Document{
    username :string;
    useremail:string;
}

//schema defines type of data that mongoDB has
const MongoDBSchema:Schema=new Schema({
    username:{type:String,required:true},
    useremail:{type:String,required:true},
});

const User = mongoose.model<MongoDBInterface>("User",MongoDBSchema);
export{User};