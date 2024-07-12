require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION)
  .then(() => {
    app.emit('Ready');
  }) 
  .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { midleWareGlobal } = require('./src/midleware/midleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'mykeyhypersafe',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

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
