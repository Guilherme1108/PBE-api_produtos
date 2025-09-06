const express = require('express') //Importando o módolo express

//importanto as rotas de produtos e clientes
const productRoutes = require('./src/routes/productRoutes')
const clientsRoutes = require('./src/routes/clientRoutes')

const app = express() //Cria uma aplicação express

app.use(express.json()) //Definir um Middleware para analisar json corpo das requisições

const porta = 8000 //Porta do servidor

//Rota teste da API
app.get('/', (req, res) => {
    res.send('A API ta funcionando 👽👽👽')
})

//usando as rotas dos produtos e clientes
app.use('/api/products', productRoutes)
app.use('/api/clients', clientsRoutes)

//Iniciando o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})