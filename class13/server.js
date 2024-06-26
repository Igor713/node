const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { midleWareGlobal } = require('./src/midleware/midleware')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(midleWareGlobal);
app.use(routes);

app.listen(3000, () => {
  console.log('https://localhost:3000');
  console.log('Server running port 3000');
});
