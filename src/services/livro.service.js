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

    update: (id, params) => {
        Livro.update(
            { ...params },
            { where: { id } })
    },
    
    delete: async (id) => {
        const object = await Livro.findByPk(id)
        const deleted = await Livro.destroy({ where: { id } })
        return { ...object, deleted }

    }

}