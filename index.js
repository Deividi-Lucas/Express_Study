// importação de LIB
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Configuração
const port = 3000
require('dotenv').config()

// Variável com valor dos dados de autenticação
let User = process.env.User
let Password = process.env.Password

app.use(express.json())

// Criação do schema no banco de dados
const Schema = new mongoose.Schema({
  title: String,
  descrition: String
})

// criação da Tabela
const Text = mongoose.model('QualquerNomeParaTeste', Schema)

// Conexão com o banco de dados
mongoose
  .connect(
    `mongodb+srv://${User}:${Password}@cluster0.6xvbxxi.mongodb.net/test`
  )
  .then(() => {
    console.log('Banco de dados conectado')
  })
  .catch(err => console.log(err))

// ROTAS

// Rota de Teste
app.get('/', async (req, res) => {
  res.send('Server test')
})

// Rota de criação de dados
app.post('/create', async (req, res) => {
  const id = req.params
  const { title, descrition } = req.body

  const response = await Text.create({ title, descrition })

  res.send(response)
})

// Rota para listagem de todos os dados salvo no banco de dados
app.get('/list', async (req, res) => {
  const users = await Text.find()
  res.send(users)
})

// PARTE PARA ESTUDAR

// app.patch('/update', async (req, res) => {
//   const id = req.params
//   const { title, descrition } = req.body
//   const response = { title, descrition }
//   await Text.updateOne({ _id: id }, response)
//   res.send(response)
// })

// Rota para deletar tabela com dados
app.delete('/delete', async (req, res) => {
  const { id } = req.params

  const response = await Text.findOneAndDelete(id)
  res.send(response)
})

// Iniciação do Server
app.listen(port, () => {
  console.log(`Seu servidor está funcionando na porta ${port} `)
})
