const Sequelize = require("sequelize")
const sequelize = new Sequelize("gestao_financeiro","root","q1w2e3r4",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(function()
{
    console.log("conectado com sucesso!")
})
.catch(function(erro)
{
    console.log("erro ao se conectar "+erro)
})

module.exports = sequelize
