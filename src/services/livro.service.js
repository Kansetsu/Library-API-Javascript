const Livro = require('../schema/livro.schema')
module.exports = {
    create: (dataInsert) => Livro.create({
        ...dataInsert
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

    },

    //TO DO
    paginate: async () => {

    }

}