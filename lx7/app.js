// 路由 route


var http = require('http')
var fs = require('fs')


// 搭建服务器
http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    console.log(req.url)
    // 判断用户所访问的页面地址
    if (req.url === "/home" || req.url === "/") {
      res.writeHead(200, { 'Content-type': 'text/html' })
      fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res)
    }else if(req.url ==="/contact"){
      res.writeHead(200, { 'Content-type': 'text/html' })
      fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res)
    }else if(req.url ==="/api"){
      // res.writeHead(200, { 'Content-type': 'text/html' })
      // fs.createReadStream(__dirname + '/api/api.html', 'utf8').pipe(res)

      var data = [{name:"herny",age:"30"},{name:'bucky',age:"28"}]
      res.writeHead(200, { 'Content-type': 'application/json' })
      res.end(JSON.stringify(data))

    }
  }
}).listen(8888)

