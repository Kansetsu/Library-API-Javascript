const express = require("express")
const controller = express.Router()
const serviceLivro = require('../services/livro.service')

controller.post('/' , (req, res)=> { 
    res.send(serviceLivro.create(req))
})

controller.get('/', async (req, res) => {
    res.send(await serviceLivro.getAll())
})

controller.get('/:id', async(req, res) => {
    res.send(await serviceLivro.getByID(req.params.id))        
})

controller.put('/:id', async(req, res) =>{
    res.send(await serviceLivro.update(req.params.id, req.params))
})

controller.delete('/:id', async(req, res) =>{
    res.sendStatus(await serviceLivro.delete(req.params.id))
})
module.exports = controller