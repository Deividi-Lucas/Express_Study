const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
require('dotenv').config()

let User = process.env.User
let Password = process.env.Password

app.use(express.json())

const Schema = new mongoose.Schema({
  title: String,
  descrition: String
})

const Text = mongoose.model('QualquerNomeParaTeste', Schema)

mongoose
  .connect(
    `mongodb+srv://${User}:${Password}@cluster0.6xvbxxi.mongodb.net/test`
  )
  .then(() => {
    console.log('Banco de dados conectado')
  })
  .catch(err => console.log(err))

app.get('/', async (req, res) => {
  res.send('Server test')
})

app.post('/create', async (req, res) => {
  const id = req.params
  const { title, descrition } = req.body

  const response = await Text.create({ title, descrition })

  res.send(response)
})

app.get('/list', async (req, res) => {
  const users = await Text.find()
  res.send(users)
})

app.delete('/delete', async (req, res) => {
  const { id } = req.params

  const response = await Text.findOneAndDelete(id)
  res.send(response)
})

app.listen(port, () => {
  console.log(`Seu servidor está funcionando na porta ${port} `)
})
