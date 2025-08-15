
const express = require("express");
const app = express();


app.get("/say-hello",(req,res)=>{
    return res.status(200).json({message:"hello"})
});

app.get("/print/:word",(req,res)=>{
    return res.status(200).json({"word":req.params.word});
})


app.listen(3000,()=>{
    console.log("listen to http://localhost:3000");
})