const express = require("express")
const app = express()
const fornecedor = require("./Models/Fornecedor")

//mapeamento de rotas
// inicio
app.get("/",function(req, res){
    res.send("Inicio")
})

//fornecedores
app.get("/fornecedores_disp",function(req,res){
    fornecedor.findAll()
    .then(function(fornecedores){

        var aux = "";

        aux+="<table>";
        for(let I=0; I< fornecedores.length; I++)
        {
            aux+="<tr>";
            aux+=`  <td>${fornecedores[I].id}</td>`;
            aux+=`  <td>${fornecedores[I].NOME_FORNECEDOR}</td>`;
            aux+=`  <td>${fornecedores[I].AREA_ATUACAO}</td>`;
            aux+=`  <td>${fornecedores[I].createdAt}</td>`;
            aux+=`  <td><a href="/fornecedores_delete/${fornecedores[I].id}">Excluir</a></td>`;
            aux+="<tr>";
        }
        aux+="</table>";

        res.send(aux)
    })
    .catch(function(erro){
        console.log("Ocorreu um erro "+ erro)
    })
})

app.get("/fornecedores_delete/:id",function(req,res){
    
    fornecedor.destroy({
        where:{
            id:req.params.id
        }
    }).then(function(){
        res.sendStatus(200)
    }).catch(function(erro){
        console.log("ocorreu um erro "+ erro)
    })
})

app.post("/fornecedores_new",function(req,res){
    fornecedor.create({
        NOME_FORNECEDOR:"Lorem Ipsum22222",
        AREA_ATUACAO:"Dolor Sit Ame22222t",
        OBSERVACOES:"Lorem Ipsum Dolor Sit Amet22222"
    }).then(function(){
        console.log("Fornecedor cadastrado com sucesso")
        res.status(200).send("cadastrado com sucesso")
    }).catch(function(erro){
        console.log("Ocorreu um erro "+erro)
    })
})

//orçamentos
app.get("/orcamentos_disp",function(req,res){
    res.send("lista de orçamentos")
})

app.post("/orcamentos_new",function(req,res){
    res.send("cadastro de orçamentos")
})

//material de construção
app.get("/material_disp",function(req,res){
    res.send("lista de material de construção")
})

app.post("/material_new",function(req,res){
    res.send("cadastro de material de construção")
})

//mão de obra
app.get("/profissional_disp",function(req,res){
    res.send("lista de mão de obra")
})

app.post("/profissional_new",function(req,res){
    res.send("cadastro de mão de obra")
})

//demandas
app.get("/demandas_disp",function(req,res){
    res.send("lista de demandas")
})

app.post("/demandas_new",function(req,res){
    res.send("cadastro de demandas")
})

app.listen(8081,function(){
    console.log("servidor online")
})