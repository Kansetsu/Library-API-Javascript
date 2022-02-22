(async () => {

    const database = require('./db')
    const Livro = require('./livro')

    try {
        const resultado = await database.sync()
        console.log(resultado);

        const resultadoCreate = await Livro.create({
            nome: "Cinderella",
            autor: "Patrícia Amorim e Fabiana Brandes",
            editora: "Vale das Letras",
            preco: 20.93,
            descricao: "A Editora Vale das Letras traz para você uma forma fácil e divertida de incentivar suas crianças a praticar a língua inglesa!",
            categoria: "Infantil",
            dataPublicacao: "2019-13-03",
            idioma: "Português",
            numeroDePaginas: 36
        })
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }


})()