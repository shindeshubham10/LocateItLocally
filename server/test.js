const express=require('express');
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,resp)
{
    resp.send("<h1>Hello Server</h1>");
    
})



app.listen(3000,function(){
    console.log("sever is running on port 3000");
})