const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
require('dotenv').config()

let User = process.env.User
let Password = process.env.Password

mongoose.connect(
  `mongodb+srv://${User}:${Password}@cluster0.6xvbxxi.mongodb.net/test`
)

app.get('/', (req, res) => {
  res.send('Server test')
})

app.listen(port, () => {
  console.log(`Seu servidor está funcionando na porta ${port}`)
})
