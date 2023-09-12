const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.user(morgan('dev'))

app.get('*', (req, res) => {
    res.json({
        'data': 'hello world'
    })
})

