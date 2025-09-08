let products = [
    {
        id: 1,
        nome: 'Camiseta',
        descricao: 'Camiseta de algodão 100% confortável',
        preco: 49.90,
        categoria: 'Vestuário',
        estoque: 120,
        ativo: true
    },
    {
        id: 2,
        nome: 'Fone de Ouvido',
        descricao: 'Fone sem fio com cancelamento de ruído',
        preco: 199.99,
        categoria: 'Eletrônicos',
        estoque: 35,
        ativo: true
    },
    {
        id: 3,
        nome: 'Caneca',
        descricao: 'Caneca de cerâmica com estampa personalizada',
        preco: 29.50,
        categoria: 'Utilidades Domésticas',
        estoque: 60,
        ativo: false
    }
];

//Função para devolver todos os objetos
const findAll = () => {
    return products
}

//Função para buscar produto por id
const findById = (id) => {
    return products.find(product => product.id === id)
}

//Função para buscar produto pelo nome
const findByName = (nome) => {
    return products.find(product => product.nome === nome)
}

//Função para adicionar um novo produto
const create = (newProduct) => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1
    const productWithId = { id: newId, ...newProduct }
    products.push(productWithId)
    return productWithId
}

//Função para atualizar um produto
// const  update = (productUpdate)

//função para excluir um produto
const deleteById = (id) => {
    const index = products.findIndex(product => product.id === id) //Procura o indice que tenha um id igual ao que foi passado no parametro
    if (index === -1) {  // Se não encontrar nenhum índice, retorna null
        return null
    }
    const deleted = products.splice(index, 1)[0] //se encontrar um index, ele remove 1 elemento sendo o index encontrado
    return deleted
}


//Exportando
module.exports = {
    findAll,
    findById,
    findByName,
    create,
    deleteById
}