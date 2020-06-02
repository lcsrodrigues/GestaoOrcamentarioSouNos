const Sequelize = require("sequelize")
const db = require("./../Connection/db")

const Fornecedor = db.define('FORNECEDOR',{
    NOME_FORNECEDOR:{
        type:Sequelize.STRING
    },
    DATA_CONTRATO:{
        type:Sequelize.DATE
    },
    AREA_ATUACAO:{
        type:Sequelize.TEXT
    },
    OBSERVACOES:{
        type:Sequelize.TEXT
    }
})

module.exports = Fornecedor;