const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome: <input type="text" name="nome">
      <button>Enviar</button>
    </form>
  `)
})

app.get('/test:idUsers?', (req, res) => {
  console.log(req.params)
  console.log(req.query)
  res.send(req.query.facebookProfile)
})

app.post('/', (req, res) => {
  res.send(`O que você me enviou foi ${req.body.nome}`)
})

app.get('contact', (req, res) => {
  res.send('Obrigado por entrar em contato conosco')
})

app.listen(3000, () => {
  console.log('https://localhost:3000')
  console.log('Server running port 3000')
})