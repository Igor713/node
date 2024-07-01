require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION)
  .then(() => {
    app.emit('Ready');
  }) 
  .catch(e => console.log(e))

const routes = require('./routes');
const path = require('path');
const { midleWareGlobal } = require('./src/midleware/midleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(midleWareGlobal);
app.use(routes);

app.on('Ready', () => {
  app.listen(3000, () => {
    console.log('https://localhost:3000');
    console.log('Server running port 3000');
  });
});

