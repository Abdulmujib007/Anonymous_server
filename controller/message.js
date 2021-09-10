const messageRouter = require('express').Router()
const Message = require('../models/messages')
const User = require('../models/users')


messageRouter.post('/:username', async (req,res) => {
   const body = req.body
   const user = await User.findOne({username:req.params.username})
   if(!user) return res.status(400).send({error:"user not found"})
    const message = new Message({
        message: body.message,
        username :req.params.username
    })
     const result = await message.save()
    return res.status(201).send(result)
})

messageRouter.get('/', async (req,res) => {
    const response = await Message.find({})
    return res.send(response)
})
messageRouter.get('/user/:username', async (req,res) => {
    const username = req.params.username
    const result =  await  Message.find({username:username})
    res.send(result)
})

module.exports = messageRouter