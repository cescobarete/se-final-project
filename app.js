// imports
const express = require('express')
const app = express()
const port = 3000

// static Files
app.use(express.static('./public'))
//app.use('/course',express.static(__dirname + '/course'))
//app.use('/regexp',express.static(__dirname + '/regexp'))
//app.use('/landing',express.static(__dirname + '/landing'))
//app.use('/dice',express.static(__dirname + '/dice'))

// Listeen on port 3000
app.listen(port, () => console.info('Listening on port ${port}'))
