exports.home = (req, res) => {
  res.send(`
  <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
  </form>
`)
}

exports.treatPost = (req, res) => {
  res.send('Nova rota de POST')
}