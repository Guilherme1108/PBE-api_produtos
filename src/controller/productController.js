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

//Método para atualizar um produto
const updateProduct = (req, res) => {
    const mudancas = req.body

    if (!mudancas.id) {
        return res.status(400).json({ mensagem: 'Forneça o id no body.' })
    }

    const productModificado = productModel.updateById(mudancas)

    if (!productModificado) {
        return res.status(404).json({ mensagem: 'Produto não encontrado.' })
    }

    return res.status(200).json({ mensagem: 'Produto atualizado com sucesso.', productModificado })
}


// Método para excluir um produto
const deleteProduct = (req, res) => {
    const { id } = req.params
    let idNumero = Number(id)

    if (!idNumero) {
        return res.status(400).json({ mensagem: 'É necessário fornecer o id do produto.' })
    }

    const deletedProduct = productModel.deleteById(idNumero)

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
    updateProduct,
    deleteProduct
}