const Livro = require('../schema/livro.schema')
module.exports = {
    create: (req) => Livro.create({
        nome: req.body.nome,
        autor: req.body.autor,
        editora: req.body.editora,
        preco: req.body.preco,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
        dataPublicacao: req.body.dataPublicacao,
        idioma: req.body.idioma,
        numeroDePaginas: req.body.numeroDePaginas
    }),
    getAll: () => Livro.findAll(),
    getByID: (id) => Livro.findByPk(id),
    update: (id, req) => {
        Livro.update(
            {nome: req.params.nome},
            {where: {id: id}})},
           /* {nome: req.body.nome,},
            {autor: req.body.autor},
            {editora: req.body.editora},
            {preco: req.body.preco},
            {descricao: req.body.descricao},
            {categoria: req.body.categoria},
            {dataPublicacao: req.body.dataPublicacao},
            {idioma: req.body.idioma},
            {numeroDePaginas: req.body.numeroDePaginas},
            {where: {id: id}}
            */
    delete: (id) => Livro.destroy({where: {id: id}})
    
}