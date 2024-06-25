const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); // Corrige para servir arquivos estáticos corretamente
app.use(routes); // Certifique-se de usar as rotas corretamente

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('https://localhost:3000');
  console.log('Server running port 3000');
});
