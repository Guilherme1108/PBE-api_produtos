let clients = [
    {
        id: 1,
        nome: 'Ana Paula Souza',
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
        nome: 'Carlos Henrique Lima',
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
        nome: 'Beatriz Oliveira',
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

//Função para buscar produto por id
const findByid = (id) => {
    return clients.find(client => client.id === id)
}

//Função para adicionar um nobo produto
const create = (newClient) => {
    const newId = clients.length > 0 ? clients[clients.length - 1].id + 1 : 1
    const clientWithId = {id: newId, ...newClient}
    clients.push(clientWithId)
    return clientWithId
}

//Função para atualizar um produto
// const  update = (clientUpdate)

//função para excluir um produto
// const delete = (deleteClient)

//Exportando
module.exports = {
    findAll,
    findByid,
    create
}