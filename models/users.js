const mongoose  = require('mongoose')

const anonymousUserSchema = new mongoose.Schema({
    username:String,
    password:String
})
anonymousUserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
    },
})

module.exports = mongoose.model('User',anonymousUserSchema)