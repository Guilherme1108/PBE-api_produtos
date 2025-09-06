const express = require('express')
const router = express.Router()
const clientController = require('../controller/clientController')

//Criando as rotas da API

router.get('/', clientController.getAllClients)

router.get('/:id', clientController.getClientById)

router.get('/nome/:nome', clientController.getClientByName)

router.post('/', clientController.createClient)


module.exports = router