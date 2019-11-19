const express = require('express')
const person = require('./controllers/people')
const router = express.Router()

router.post('/persons', person.newPerson)
router.get('/persons', person.getPeople)
router.get('/persons/:id', person.getPerson)
router.patch('/persons/:id', person.updatePerson)
router.delete('/persons/:id', person.deletePerson)

module.exports = router