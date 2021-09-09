const User = require('../models/users')
const loginRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../utils/config')


loginRouter.post('/', async(req,res) => {
    const body = req.body

    const user = await  User.findOne({username:body.username})
    const correctPassword = user === null 
    ?
    false 
    :
    await bcrypt.compare(body.password,user.password)
    if(!(user && correctPassword)){
        return res.status(400).send({error:"invalid password or username"})
    }
    const tokenForUser = {
        username: user.username,
        id:user._id
    }
    const token = jwt.sign(tokenForUser,config.SECRET)
    return  res.send({token,username:user.username,id:user._id})
})

module.exports = loginRouter