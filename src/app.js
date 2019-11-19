const express = require('express')
const app = express()

require('./db/db.js')

const router = require('./routes')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(router)

app.listen(port, function() {
    console.log('Up and at em');
})