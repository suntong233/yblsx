const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/personlist',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const PersonSc = new mongoose.Schema({
    date: { type: String },
    name: { type: String },
    address: { type: String }
})

const Person = mongoose.model('Person', PersonSc)






module.exports = {
    Person
}