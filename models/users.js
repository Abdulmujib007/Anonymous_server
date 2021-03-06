const mongoose  = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const anonymousUserSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
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
anonymousUserSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User',anonymousUserSchema)