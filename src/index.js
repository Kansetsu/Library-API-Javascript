(async () => {
    const porta = 3333

    const database = require('./db')
    const express = require('express')
    const Livro = require('./livro')
    const bodyParser = require('body-parser')
    const app = express()
    
    database.sync()
    app.use(bodyParser.urlencoded({ extended: true }))

    app.post('/livros' , (req, res)=> { 
        const livroCreate =  Livro.create({
            nome: req.body.nome,
            autor: req.body.autor,
            editora: req.body.editora,
            preco: req.body.preco,
            descricao: req.body.descricao,
            categoria: req.body.categoria,
            dataPublicacao: req.body.dataPublicacao,
            idioma: req.body.idioma,
            numeroDePaginas: req.body.numeroDePaginas
        })
        res.send(livroCreate)
    })

    app.get('/livros', (req, res) => {
        const livrosGet = Livro.findAll()
        res.send(livrosGet)
    })

    app.get('/livros/:id', (req, res, next) => {
        const livroGet = Livro.findByPk(req.params.id)
        res.send(livroGet)        
    })
    

    app.listen(porta, () => {
        console.log(`Servidor está executando na porta ${porta}.`)
    })
})()