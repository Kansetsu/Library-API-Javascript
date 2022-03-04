const service = require('./livro.service')
jest.mock('../schema/livro.schema', () => {
    const dbData = []
    return {
        create: (dataInsert) => { 
            dbData.push(dataInsert)
            return dataInsert
        },
        findByPk: (id) => {
            return dbData[id]
        },
        findAll: (options) => {
            if(options && options.limit){
                return dbData.slice(0, options.limit)
            }
            return dbData
            
        },
        destroy: ({where}) => {
            return dbData.pop(where.id)
        },
        update: (updateObj, options) => {
            const obj = dbData[options.where.id -1]
            dbData[options.where.id -1] = {...obj, ...updateObj}
        }

    }
})

const livro = {
    nome: "testes",
    autor: "testado",
    editora: "testadora",
    preco: 10,
    descricao: "testado com sucesso",
    categoria: "teste",
    dataPublicacao: "2022-02-23",
    idioma: "Portugues",
    numeroDePaginas: 10
}

test('create a book', async () => {
    expect(await service.create(livro)).toEqual(livro)
})

test('get all books', () => {
   expect(service.getAll()).toEqual([livro])
})

test('get a specific number of books', async () => {
    expect(await service.paginate(1)).toEqual([livro])
})

test('get a book for ID', async () => {
    expect(await service.getByID(1)).toEqual(livro)
})

test('delete a book for ID', async () => {
    expect(await service.delete(1)).toEqual({ "deleted": 0 })
})

test('update a book', async () => {
   // expect(await service.update(1, { nome: "testes" })).toEqual({...livro, nome: "testes"})
    console.log(await service.update(1, { nome: "testes" }));
})