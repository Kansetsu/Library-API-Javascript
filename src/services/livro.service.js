const Livro = require('../schema/livro.schema')
module.exports = {
    create: (dataInsert) => Livro.create({
        ...dataInsert
    }),

    getAll: () => Livro.findAll(),

    getByID: (id) => Livro.findByPk(id),

    paginate: (pages) => Livro.findAndCountAll({ limit: pages }),

    update: (id, params) => {
        Livro.update(
            { ...params },
            { where: { id } })
            return Livro.findByPk(id)
    },

    delete: async (id) => {
        const object = await Livro.findByPk(id)
        const deleted = await Livro.destroy({ where: { id } })
        return { ...object, deleted }

    }
}