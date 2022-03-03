const service = require('./livro.service')
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

test('create a book', async() => {
    expect(await service.create(livro)).toEqual(livro)
})

// TO DO
test('get all books', () => {
    expect(service.getAll()).toBe()
})

//TO DO
  test('get a specific number of books', async() => {
      expect(await service.paginate(1)).toBe(livro)
  })

test('get a book for ID', async() => {
    const get = await service.getByID(3)
    expect(get).toBe(get)
})

test('delete a book for ID', async() => {
    expect(await service.delete(6)).toBe()//.toEqual({"deleted": 0})
})

test('update a book', async() => {
    expect(await service.update(3, {nome: "testes"})).toBe(livro)
})