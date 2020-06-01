const Sequelize = require("sequelize")
const db = require("./../Connection/db")

const Profissional = db.define('PROFISSIONAL',{
    NOME_PROFISSIONAL:{
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