const productModel = require('../model/productModel')

//Método de controle para listar todos os produtos
const getAllProducts = (req, res) => {
    const products = productModel.findAll()
    res.status(200).json(products)
}

//Método do controlador para pegar um produto por ID
const getProductById = (req, res) => {
    const id = parseInt(req.params.id)
    const product = productModel.findById(id)

    if (product) {
        res.status(200).json(product)
    } else {
        res.status(404).json({ mensagem: 'Este produto não está em nosso catálogo.' })
    }
}

//Método de procurar pelo nome
const getProductByName = (req, res) => {
    const nome = String(req.params.nome)
    const product = productModel.findByName(nome)

    if (product) {
        res.status(200).json(product)
    } else {
        res.status(404).json({ mensagem: 'Este produto não está em nosso catálogo.' })
    }

}

//Método para adicionar um produto
const createProduct = (req, res) => {
    //Pegando os dados
    const { nome, descricao, preco, categoria, estoque, ativo } = req.body

    //validando
    if (!nome || !descricao || !preco || !categoria || !estoque || ativo === undefined) {
        return res.status(400).json({ mensagem: 'Informações faltando, o produto não foi criado.' })
    } else {
        const newProduct = productModel.create({ nome, descricao, preco, categoria, estoque, ativo })
        res.status(201).json({ newProduct })
    }
}


// Método para excluir um produto
const deleteProduct = (req, res) => {
    const { nome } = req.params

    if (!nome) {
        return res.status(400).json({ mensagem: 'É necessário fornecer o nome do produto.' })
    }

    const deletedProduct = productModel.deleteByName(nome)

    if (!deletedProduct) {
        return res.status(404).json({ mensagem: 'Produto não encontrado.' })
    }

    return res.status(200).json({ mensagem: 'Produto deletado com sucesso.', deletedProduct })
}


module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    createProduct,
    deleteProduct
}