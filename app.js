const express = require('express')
const app = express()
require('express-async-errors')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./utils/config')
const userRouter = require('./controller/user')
const loginRouter = require('./controller/login')
const messageRoouter = require('./controller/message')

const {mongoUrl} = config
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('connected to server'))
    .catch(err => console.log(`error connecting to ${err.message}`))

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use('/api/user',userRouter)
app.use('/api/login',loginRouter)
app.use('/api/messages', messageRoouter)

module.exports = app