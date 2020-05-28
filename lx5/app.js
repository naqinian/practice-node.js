// 缓存区与流  buffer、stream
// 读写数据流

var http = require('http')
var fs = require('fs')
// 读取文件流
// var myRead = fs.createReadStream(__dirname + '/read.txt', 'utf8');
// 写入文件流
// var myWrite = fs.createWriteStream(__dirname + '/witeMe2.txt')
// pipe事件
// myRead.pipe(myWrite)
// 写入浏览器

// 搭建服务器
var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/plain' })
  // 读取文件流
  var myRead = fs.createReadStream(__dirname + '/read.txt', 'utf8');
  // pipe事件
  myRead.pipe(res)
}).listen(8888)

// myRead.on('data', (chunk) => {
//   console.log("------正在接收一部分数据------")
//   console.log(chunk)
//   // 写入数据
//   myWrite.write(chunk)
// });