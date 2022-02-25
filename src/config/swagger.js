const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const controllerFile = ['./src/controller/livros.controller.js']

//Generate a new swagger_output.json if use on terminal npm run swagger-autogen
//for generate a documentation for this project automatic
swaggerAutogen(outputFile, controllerFile)