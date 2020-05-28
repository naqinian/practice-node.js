
var http = require('http')
var fs = require('fs')


// 搭建服务器
http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    console.log(req.url)
    res.writeHead(200, { 'Content-type': 'application/json' })
    // 读取文件流
    var myRead = fs.createReadStream(__dirname + '/index.json', 'utf8');
    // pipe事件
    myRead.pipe(res)
  }
}).listen(8888)

