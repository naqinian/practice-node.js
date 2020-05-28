// 引入express模块
var express = require('express');

// 实例化express的对象
var app = express();

// 配置视图引擎
app.set('view engine', 'ejs')

// 通过对象调用对应的方法
// 根据用户请求的地址，返回对象的数据信息
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html')
})

// 路由参数
// app.get('/api/:id', (req, res) => {
//   res.send('访问的路径参数为：' + req.params.id)
// })

// ejs 简单数据
// app.get('/api/:id', (req, res) => {
//   res.render('profile', { name: 'ejs' });
// })

// 复杂数据
app.get('/api/:id', (req, res) => {
  var data = [{ age: 29, name: ['henry', 'emily'] }, { age: 30, name: ['bucky', 'john'] }]
  res.render('profile', { websiteName: req.params.id, data: data });
})

// 监听服务器端口号
app.listen(8888);