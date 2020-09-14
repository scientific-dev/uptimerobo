const express = require('express')
const app = new express()
const links = require('./links.json')
const fetch = require('node-fetch')

app.get('/', (req, res) => console.log('Ping Received'))

setInterval(() => {
  console.log('\nNew Wave at ' + Date.now())
  links.forEach(l => {
    fetch(l)
    console.log('Pinged ' + l)
  }
  console.log(' ')
}, 1000)

app.listen(2020)
