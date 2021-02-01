const express = require("express")
const vhost = require("vhost")

const firstApp = require("./1")
const secondApp = require("./2")

const app = express()

app.use(vhost("firstApp.localhost", firstApp)) 
// firstApp.localhost:3000 || firstApp.localhost:3000/first

app.use(vhost("secondApp.localhost", secondApp)) 
//secondApp.localhost:3000 || secondApp.localhost:3000/second

app.get('/', (req, res) => {
    res.send("App")
})

app.get('/app', (req, res) => {
    res.send("App ---> test")
})

app.listen(3000, () => {
    console.log("Server started...")
})
