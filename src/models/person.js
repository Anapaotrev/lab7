const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name: String,
    age: Number,
    born: Number,
    timeline: String,
    alliegance: [String],
    playedBy: String,
    titles: [String],
    father: String,
    mother: String,
    spouse: String
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person
