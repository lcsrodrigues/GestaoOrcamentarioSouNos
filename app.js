const express = require("express")
const app = express()

app.get("/",function(req, res){
    res.send("Inicio")
})

app.listen(8081,function(){
    console.log("servidor online")
})