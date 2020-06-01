const Sequelize = require("sequelize")
const db = require("./../Connection/db")

const Orcamentos = db.define('ORCAMENTOS',{
    SERVICO:{
        type:Sequelize.TEXT
    },
    PRECO:{
        type:Sequelize.FLOAT
    },
    DATA_ORCAMENTO:{
        type:Sequelize.DATE
    },
    FORMA_PAGAMENTO:{
        type:Sequelize.TEXT
    },
    DETALHES:{
        type:Sequelize.TEXT
    }
})