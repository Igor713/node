exports.home = (req, res) => {
  res.render('index', {
    title: 'Este é o título da página',
    numbers: [1,2,3,4,5,6,7,8,9]
  })
  return
}

exports.treatPost = (req, res) => {
  res.send(req.body)
  return
}