const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    //console.log(req.body)
    res.send([{name: 'edu', price: '2.75', description:'good shit'}, {name: 'edu', price: '2.75', description:'good shit'}, {name: 'edu', price: '2.75', description:'good shit'}])
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))