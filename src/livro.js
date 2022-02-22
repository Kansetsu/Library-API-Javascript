const Sequelize = require('sequelize')
const database = require('./db')

const Livro = database.define('livro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autor: Sequelize.STRING,
    editora: Sequelize.STRING,
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING,
    categoria: Sequelize.STRING,
    dataPublicacao: Sequelize.TEXT,
    idioma: Sequelize.STRING,
    numeroDePaginas: Sequelize.DECIMAL


})

module.exports = Livro