// 载入http模块
var http = require("http");

// 创建服务器 
// req => request     ：浏览器发送过来的请求对象
// res => response    ：服务器响应给浏览器的对象
http.createServer((req,res)=>{
  // 发生HTTP头部
  // HTTP状态值：200：ok
  // 内容类型：text/plain
  res.writeHead(200,{'Content-Type':'text.plain'});

  // 发生响应数据
  res.end('hello world\n')
}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/')