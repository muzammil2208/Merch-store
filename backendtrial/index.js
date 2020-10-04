//installing express
const express=require("express");
const app=express();
const port=4000;

//routes
app.get("/",(req,res)=>{
    return res.send("hello there");
});


//listening routes
app.listen(port,()=>{
    console.log("server is listening at port${port}")
})