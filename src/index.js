const porta = 3333

const database = require('./config/db')
const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
const app = express()
const controllerLivros = require('./controller/livros.controller')

//Creat database, if don't exist.
database.sync() 

app.use('/livros/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/livros', controllerLivros)


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
