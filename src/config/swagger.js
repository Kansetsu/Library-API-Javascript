const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const controllerFile = ['./src/controller/livros.controller.js']

// Responsible to gerate this informations on swagger_output.json
const doc = {
    info: {
        version: "1.0.0",
        title: "Library API",
        description: "With this API you can create and safe your books",
        contact: {
            email: "vmartins@daitan.com"
        }
    },
    host: "localhost:3333",
    basePath: "/livros",
    schemes: ["http"],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        Book: {
            nome: "Cinderella",
            autor: "Patrícia Amorim",
            editora: "Vale das letras",
            preco: 20.93,
            descricao: "A Editora Vale das Letras traz para você uma forma fácil e divertida de incentivar suas crianças a praticar a língua inglesa!",
            categoria: "Infantil",
            dataPublicacao: "2019-03-13",
            idioma: "Português",
            numeroDePaginas: 36
        }
    }
}


//Generate a new swagger_output.json when you start the project, starting index.js (npm run swagger-autogen)
swaggerAutogen(outputFile, controllerFile, doc).then(() => {
    require('../index.js')
})