// 文件系统

// 1、引入文件系统模块 
var fs = require('fs');

// 2、通过对象调用方法
// 2.1 同步读取文件
// var read = fs.readFileSync('read.txt','utf8')
// 2.2 同步写入
// fs.writeFileSync('write.txt',read)

// 2.3 异步读取
// fs.readFile('read.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('异步读取：', data)
// })


// 2.4 异步写入
// fs.writeFile('write2.txt','text text',(err)=>{
//   if(err) throw err;
//   console.log('已保存')
// })

// 3、创建文件夹   删除文件夹   删除文件
// 3.1 创建文件夹
// fs.mkdirSync('buffo')

// 3.2 删除文件夹
// fs.rmdirSync('buffo')

// 3.3 删除文件
// fs.unlink('write2.txt',(err)=>{
//   if(err) throw err;
//   console.log('文件已经删除！')
// })

// 异步创建和删除文件夹
// fs.mkdir('buffo',()=>{
//   fs.readFile('read.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     fs.writeFile('./buffo/write2.txt',data,()=>{})
//   })
// })

// 如果文件夹不是空的。1.删除文件夹中的文件，2.再删除外部文件夹
fs.unlink('./buffo/write2.txt', () => {
  fs.rmdir('buffo', (err) => {
    if (err) throw err
    console.log('删除成功')
  })
})
