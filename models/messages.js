const mongoose = require('mongoose')

messageSchema = new mongoose.Schema({
        message:String,
        username:String   
})

messageSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Message',messageSchema)