require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      axios = require('axios'),
      massive = require('massive')
      app = express()

const {
PORT,
SESSION_SECRET
} = process.env

//run massive here

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))


//endpoints will go here



app.listen(PORT, () => {
  console.log(`There's a party goin' down on ${PORT}`)
})