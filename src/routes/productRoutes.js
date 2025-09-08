const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

//Criando as rotas da API

router.get('/', productController.getAllProducts)

router.get('/:id', productController.getProductById)

router.get('/nome/:nome', productController.getProductByName)

router.post('/', productController.createProduct)

router.delete('/:nome', productController.deleteProduct)

module.exports = router