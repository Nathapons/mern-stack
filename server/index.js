const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const blogRoute = require('./route/blog')
const authRoute = require('./route/auth')

const app = express()

// Connect Cloud DB
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: false
}).then(
    () => console.log('Connect Database completely')
).catch(
    (err) => console.log(err)
)

// Middleware
app.use(express.json())
app.use(cors())
// ดัก request
app.use(morgan('dev'))

// Router
app.use('/api', blogRoute)
app.use('/api', authRoute)

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Start server at ${PORT}`))
