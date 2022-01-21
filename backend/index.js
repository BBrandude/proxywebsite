const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/stock', (req, res) => {
    //console.log(req.body)
    res.send([{name: 'edu', price: '2.75', description:'good shit'}, {name: 'edu', price: '2.75', description:'good shit'}, {name: 'edu', price: '2.75', description:'good shit'}])
})

app.get('/discord', (req, res) => {
    //console.log(req.body)
    res.send('https://discord.gg/YvBpt3Dp8Q')
})

app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))