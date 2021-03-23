// imports
const express = require('express')
const app = express()
const port = 3000

// static Files
app.use(express.static('./public'))
//app.use('/js',express.static(__dirname + '/js'))
//app.use('/css',express.static(__dirname + '/css'))
//app.use('/img',express.static(__dirname + '/img'))

// Listeen on port 3000
app.listen(port, () => console.info('Listening on port ${port}'))