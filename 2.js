const express = require("express")

const secondApp = express()

secondApp.get('/', (req, res) => {
    res.send('Second App')
})

secondApp.get('/second', (req, res) => {
    res.json([
        {title: "Second app"}
    ])
})

module.exports = secondApp
