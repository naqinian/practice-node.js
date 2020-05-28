const express = require('express')
const mysql = require('mysql')

const app = express();

// 创建连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'test'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySql connected....');
});

// 查询
app.get('/api/:title', (req, res) => {
  let sql = 'select * from ' + req.params.title
  console.log(sql)
  db.query(sql, (err, data) => {
    if (err) throw err
    res.json(data)
  })
})

app.listen('3000', () => {
  console.log('Server started on port 3000')
})