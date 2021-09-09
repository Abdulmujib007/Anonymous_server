const userRouter = require('express').Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')


userRouter.post('/', async(req,res) => {
    const body = req.body
    if(!(body.username || body.password)) return res.status(400).send({error:"password and username required"})

    const saltRound = 10
    const passwordHash = await  bcrypt.hash(body.password,saltRound)
    
    const user = new User({
        username: body.username,
        password:passwordHash
    })
    const userSaved = await user.save()
     return res.status(201).send(userSaved)

})

userRouter.get('/', async(req,res) => {
    const response = await User.find({})
    return res.send(response)
})
module.exports = userRouter