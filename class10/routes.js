const express = require('express')
const route = express.Router
const homeController = require('./src/controllers/homeController')
const contactController = require('./src/controllers/contactController')

route.get('/', homeController.home)
route.post('/', homeController.treatPost)

route.get('/contact', contactController.home)
module.exports = route