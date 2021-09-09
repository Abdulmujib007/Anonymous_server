require('dotenv').config()

const mongoUrl = process.env.MONGOURI
const PORT = process.env.PORT
const SECRET = process.env.SECRET

module.exports = {mongoUrl,PORT,SECRET}