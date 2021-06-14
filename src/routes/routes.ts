import Router from "express"
const router = Router()

router.get("/",(req,res)=>{
    res.send({
        recieved:true,
        data:"this is home page",
    });
});
router.get("/profile",(req,res)=>{
    res.send({
        recieved:true,
        data:"this is profile page",
    });
});

router.get("/cart",(req,res)=>{
    res.send({
        recieved:true,
        data:"this is cart page",
    });
});

export {router};