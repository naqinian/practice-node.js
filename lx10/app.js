// 引入express模块
var express = require('express');

// 实例化express的对象
var app = express();

// 配置视图引擎
app.set('view engine', 'ejs')

// 让服务器识别外部样式表 express.static()  ==>  将静态文件（css）模块化
app.use('/assets', express.static('assets'))

// 通过对象调用对应的方法
app.get('/', (req, res) => {
  res.render('index', { name: "index" })
})

app.get('/contact', (req, res) => {
  res.render('contact', { name: "contact" })
})

// 监听服务器端口号
app.listen(8888);