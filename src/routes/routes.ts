import Router from "express"
import { DBController } from "../controller/db_controller";
import { MongoDBController } from "../controller/mongodb_controller";
const router = Router()
router.get("/home",(req,res)=>{
    res.send({
        data:"This is home page",
    })
})
router.get("/verify",DBController.showData);
router.get("/admin",DBController.showAdminData);
router.get("/mongodb/",MongoDBController.readData);
//@POSTS
router.post("/signup",DBController.signup) //here we don't need to externally provide request or response, as it is already under signup of DBController file
router.post("/mongodb/create",MongoDBController.createData);
router.post("/mongodb/exists",MongoDBController.checkIfExists);
//@PUT
router.put("/mongodb/update",MongoDBController.updateData);
//@DELETE
router.delete("/mongodb/delete/:userid",MongoDBController.deleteData); //: evaluates that the userid will be a unique value
export {router};




// router.get("/",(req,res)=>{
//     res.send({
//         recieved:true,
//         data:"this is home page",
//     });
// });
// router.get("/profile",(req,res)=>{
//     res.send({
//         recieved:true,
//         data:"this is profile page",
//     });
// });

// router.get("/cart",(req,res)=>{
//     res.send({
//         recieved:true,
//         data:"this is cart page",
//     });
// });

