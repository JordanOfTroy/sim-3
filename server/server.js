require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      axios = require('axios'),
      massive = require('massive'),
      ctrl = require('./controller'),
      app = express()

const {
SERVER_PORT,
SESSION_SECRET
} = process.env

//run massive here

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