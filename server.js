const express = require('express') //Importando o módolo express

//importanto as rotas de produtos e clientes
const productRoutes = require('./src/routes/productRoutes')

const app = express() //Cria uma aplicação express

app.use(express.json()) //Definir um Middleware para analisar json corpo das requisições

const porta = 8000 //Porta do servidor

//Rota teste da API
app.get('/', (req, res) => {
    res.send('A API ta funcionando dog 😵‍💫😵‍💫😵‍💫')
})

//usando as rotas dos produtos
app.use('/api/products', productRoutes)

//Iniciando o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})