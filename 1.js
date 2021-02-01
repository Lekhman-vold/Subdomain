const express = require("express")

const firstApp = express()

firstApp.get('/', (req, res) => {
    res.send('First App...')
})

firstApp.get('/first', (req, res) => {
    res.send('First Section...')
})

module.exports = firstApp