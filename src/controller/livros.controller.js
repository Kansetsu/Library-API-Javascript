const express = require("express")
const controller = express.Router()
const serviceLivro = require('../services/livro.service')

// ---IMPORTANT---
//The comments below are generated information in swagger_output.json in your creation


controller.post('/' , (req, res)=> { 
    // #swagger.tags = ['Library']
    // #swagger.summary = 'Create a book'
    // #swagger.description = 'This route will be responsible for create a book in database'
    /* #swagger.parameters['book'] = {
        in: 'body',
        description: 'Book information',
        required: true,
        schema: { $ref: "#/definitions/Book"}
    }*/
    res.send(serviceLivro.create(req.body))
})

controller.get('/', async (req, res) => {
    // #swagger.tags = ['Library']    
    // #swagger.summary = 'Get all books'
    // #swagger.description = 'Get all books'
    res.send(await serviceLivro.getAll())
})

controller.get('/:id', async(req, res) => {
    // #swagger.tags = ['Library']
    // #swagger.summary = 'Search for a book with your ID'
    // #swagger.description = 'Search for a book with your ID'
    // #swagger.parameters['id'] = { description: 'User ID' }    
    res.send(await serviceLivro.getByID(req.params.id))      
})

controller.get('/paginate/:pages', async(req, res) =>{
    // #swagger.tags = ['Library']
    // #swagger.summary = 'Get a limited number of books'
    // #swagger.description = 'Get a limited number of books'
    // #swagger.parameters['pages'] = { description: 'Number of elements' }    
    res.send(await serviceLivro.paginate(req.params.pages))
})

controller.put('/:id', async(req, res) =>{
    // #swagger.tags = ['Library']
    // #swagger.summary = 'Update a book'
    // #swagger.description = 'Update data from a book using your ID'
    // #swagger.parameters['id'] = { description: 'User ID' }
    /* #swagger.parameters['book'] = {
        in: 'body',
        description: 'Book information for update',
        required: true,
        schema: { $ref: "#/definitions/Book"}
    }*/    
    res.send(await serviceLivro.update(req.params.id, req.body))
})

controller.delete('/:id', async(req, res) =>{
    // #swagger.summary = 'Delete a book'
    // #swagger.description = 'Delete a book in database'
    // #swagger.tags = ['Library']
    // #swagger.parameters['id'] = { description: 'User ID'}    
    res.send(await serviceLivro.delete(req.params.id))
})



module.exports = controller