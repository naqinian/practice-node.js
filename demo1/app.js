
var express = require('express');

// 自定义模块
var todo = require('./controller/todo');

var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

todo(app)

app.listen(3000);