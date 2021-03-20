// imports
// Listening on port localhost:3000
const express = require('express')
const app = express()
const port = 3000

// static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})