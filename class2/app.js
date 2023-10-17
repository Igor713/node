const path = require('path')
const multiplication = require('./mod2')

console.log(__dirname)
console.log(path.resolve(__dirname, '..', 'class1', 'app.js'))

console.log(multiplication(2, 2))