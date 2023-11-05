const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }))

app.use('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.listen(3000, () => {
  console.log('https://localhost:3000')
  console.log('Server running port 3000')
})