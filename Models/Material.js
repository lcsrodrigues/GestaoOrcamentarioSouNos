const Sequelize = require("sequelize")
const db = require("./../Connection/db")

const Material = db.define('MATERIAL',{
    NOME_MATERIAL:{
        type:Sequelize.TEXT
    },
    QUANTIDADE:{
        type:Sequelize.TEXT
    },
    PRECO:{
        type:Sequelize.FLOAT
    },
    DATA_COMPRA:{
        type:Sequelize.DATE
    },
    FORMA_PAGAMENTO:{
        type:Sequelize.TEXT
    },
    DETALHES:{
        type:Sequelize.TEXT
    }
})