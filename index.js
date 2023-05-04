const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
require('dotenv').config()

let User = process.env.User
let Password = process.env.Password

app.use(express.json())

mongoose
  .connect(
    `mongodb+srv://${User}:${Password}@cluster0.6xvbxxi.mongodb.net/test`
  )
  .then(() => {
    console.log('Banco de dados conectado')
  })
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Server test')
})

app.post('/post', (req, res) => {
  const title = req.body

  // Os dados são inseridos no json da seguinte forma
  // [
  //   {
  //     'title': 'dados'
  //   }
  // ]

  let response = title

  res.send(response)
})

app.listen(port, () => {
  console.log(`Seu servidor está funcionando na porta ${port} `)
})
