let clients = [
    {
        id: 1,
        nome: 'Ana',
        email: 'ana.souza@gmail.com',
        telefone: '(11) 91234-5678',
        endereco: {
            rua: 'Rua das Flores',
            numero: 123,
            bairro: 'Jardim Primavera',
            cidade: 'São Paulo',
            estado: 'SP',
            cep: '01234-567'
        },
        dataCadastro: '2023-08-15T14:35:00',
        ativo: true
    },
    {
        id: 2,
        nome: 'Carlos',
        email: 'carlos.lima@hotmail.com',
        telefone: '(21) 99876-5432',
        endereco: {
            rua: 'Avenida Central',
            numero: 456,
            bairro: 'Centro',
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            cep: '20010-000'
        },
        dataCadastro: '2024-01-22T09:10:00',
        ativo: true
    },
    {
        id: 3,
        nome: 'Beatriz',
        email: 'beatriz.oli@gmail.com',
        telefone: '(31) 98765-4321',
        endereco: {
            rua: 'Rua das Acácias',
            numero: 789,
            bairro: 'Santa Lúcia',
            cidade: 'Belo Horizonte',
            estado: 'MG',
            cep: '30123-456'
        },
        dataCadastro: '2022-11-05T16:45:00',
        ativo: false
    }
];

//Função para devolver todos os objetos
const findAll = () => {
    return clients
}

//Função para buscar cliente por id
const findById = (id) => {
    return clients.find(client => client.id === id)
}

//Função para buscar cliente pelo nome
const findByName = (nome) => {
    return clients.find(client => client.nome === nome)
}

//Função para adicionar um novo cliente
const create = (newClient) => {
    const newId = clients.length > 0 ? clients[clients.length - 1].id + 1 : 1
    const clientWithId = {id: newId, ...newClient}
    clients.push(clientWithId)
    return clientWithId
}

//Função para atualizar um cliente
// const  update = (clientUpdate)

//função para excluir um cliente
const deleteByName = (nome) => {
    const index = clients.findIndex(product => product.nome === nome) //Procura o indice que tenha um nome igual ao que foi passado no parametro
    if (index === -1) { //se não encontrar nenhm index irá retornar null
        return null
    }
    const deleted = clients.splice(index, 1)[0] //se encontrar um index, ele remove 1 elemento sendo o index encontrado
    return deleted
}

//Exportando
module.exports = {
    findAll,
    findById,
    findByName,
    create,
    deleteByName
}