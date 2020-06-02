const Sequelize = require("sequelize")
const db = require("./../Connection/db")

const Demanda = db.define('DEMANDA',{
    DEMANDA:{
        type:Sequelize.STRING,
        require:true
    },
    DATA_INICIO:{
        type:Sequelize.DATE
    },
    DATA_TERMINO:{
        type:Sequelize.DATE
    },
    STATUS:{
        type:Sequelize.BOOLEAN
    },
    PRECO:{
        type:Sequelize.FLOAT
    }
})