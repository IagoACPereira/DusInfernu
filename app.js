const express = require('express')
require('dotenv').config()
const router = require('./routes/index.js')

const app = express()
const porta = process.env.PORTA

app.use(
    express.json(),
    router
)

app.listen(porta, () => console.log(`Servidor excutando porta ${porta}`))