
// 解码
var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded({ extended: false })

var data = [
  { item: "nodejs" },
  { item: "EJS" },
  { item: "express" },
  { item: "nodemon" }
]

module.exports = (app) => {
  // 获取数据
  app.get('/', (req, res) => {
    // res.send(req.url)
    res.render('todo', { todos: data })
  });
  // 传递数据
  app.post('/', urlencodeParser, (req, res) => {
    // coding...
    data.push(req.body)
  })
  // 删除数据
  app.delete('/:item', (req, res) => {
    // coding...
    data = data.filter((todo) => {
      return req.params.item !== todo.item;
    })
    res.json(data)
  })
}