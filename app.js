const express = require("express")
const app = express()
const fornecedores = require("./Routers/Fornecedor")

app.use("/fornecedores",fornecedores)

app.listen(8081,function(){
    console.log("servidor online na porta 8081")
})