const express = require('express')
const router  = express.Router()

router.get('/',(req, res)=>{
    res.send("Home fornecedores")
})

router.get('/cadastro',(req, res)=>{
    res.send("Cadastro fornecedores")
})

router.get('/listar',(req, res)=>{
    res.send("Listar fornecedores")
})

module.exports = router;