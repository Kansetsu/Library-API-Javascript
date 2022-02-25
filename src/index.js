const porta = 3333

const database = require('./config/db')
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../doc/swagger_output.json')
const app = express()
const controllerLivros = require('./controller/livros.controller')

//Creat database, if don't exist.
database.sync() 
app.use(express.json())
app.use('/livros/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/livros', controllerLivros)


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})