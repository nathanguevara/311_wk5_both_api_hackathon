const express = require('express')
const app = express()
const port = process.env.PORT || 4001

//erick put stuff here!

app.get('/', (req, res) => res.send('Welcome to our API'))

app.listen(port, () => {
    console.log('app is listening on:', port)
  })