require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      axios = require('axios'),
      massive = require('massive'),
      ctrl = require('./controller'),
      app = express()

const {
SERVER_PORT,
SESSION_SECRET,
CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(express.json())

//endpoints will go here
/***************************************** */

app.post(`/api/login`, ctrl.login)

/***************************************** */

app.listen(SERVER_PORT, () => {
  console.log(`There's a party goin' down on ${SERVER_PORT}`)
})