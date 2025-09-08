const clientModel = require('../model/clientModel')

//Método de controle para listar todos os clientes
const getAllClients = (req, res) => {
    const clients = clientModel.findAll()
    res.status(200).json(clients)
}

//Método do controlador para pegar um cliente por ID
const getClientById = (req, res) => {
    const id = parseInt(req.params.id)
    const client = clientModel.findById(id)

    if (client) {
        res.status(200).json(client)
    } else {
        res.status(404).json({ mensagem: 'Este cliente não está cadastrado.' })
    }
}

//Método de procurar pelo nome
const getClientByName = (req, res) => {
    const nome = String(req.params.nome)
    const client = clientModel.findByName(nome)

    if (client) {
        res.status(200).json(client)
    } else {
        res.status(404).json({ mensagem: 'Este cliente não está cadastrado.' })
    }

}

//Método para adicionar um cliente
const createClient = (req, res) => {
    //Pegando os dados
    const { nome, email, telefone, endereco, dataCadastro, ativo } = req.body

    //validando
    if (!nome || !email || !telefone || !endereco || !dataCadastro || ativo === undefined) {
        return res.status(400).json({ mensagem: 'Informações faltando, o cliente não foi cadastrado.' })
    } else {
        const newClient = clientModel.create({nome, email, telefone, endereco, dataCadastro, ativo})
        res.status(201).json({newClient})
    }
}

//Método para atualizar dados do cliente
const updateClient = (req, res) => {
    const mudancas = req.body

    const clientModificado = clientModel.updateById(mudancas)

    if (!clientModificado) {
        return res.status(400).json({ mensagem: 'Produto não encontrado.' })
    }

    return res.status(200).json({ mensagem: 'Produto atualizado com sucesso.', clientModificado })
}

// Método para excluir um cliente
const deleteClient = (req, res) => {
    const { id } = req.params
    let idNumero = Number(id)

    if (!idNumero) {
        return res.status(400).json({ mensagem: 'É necessário fornecer o id do cliente.' })
    }

    const deletedClient = clientModel.deleteByName(idNumero)

    if (!deletedClient) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado.' })
    }

    return res.status(200).json({ mensagem: 'Cliente removido com sucesso.', deletedClient })
}

    module.exports = {
        getAllClients,
        getClientById,
        getClientByName,
        createClient,
        updateClient,
        deleteClient
    }