exports.home = (req, res) => {
  res.render('index')
}

exports.treatPost = (req, res) => {
  res.send('Nova rota de POST')
}