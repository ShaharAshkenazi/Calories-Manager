/******  Developers:  ******
Shahar Shemesh, ID: 315049460
Liron Dahan, ID: 207382078
Tal Reguan, ID: 315095489
****************************/

const express = require('express')
const mongoose = require('mongoose')
const about = require('./routes/about')
const addcost = require('./routes/addcost')
const report = require('./routes/report')
const users = require('./routes/users')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.listen(process.env.PORT, () => {
  console.log(`API listening on PORT ${process.env.PORT} `)
})

// Connect to the MongoDB database
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true })
  .then(function () {
    console.log('Connected to DB.')
  })
  .catch(function (err) {
    console.log(err)
  })

// Set the view engine for rendering views
app.set('view engine')

// Parse incoming JSON requests
app.use(express.json())

// Parse URL-encoded requests
app.use(express.urlencoded({ extended: true }))

// Register the routes handler
app.use('/users', users)
app.use('/addcost', addcost)
app.use('/report', report)
app.use('/about', about)

module.exports = app
