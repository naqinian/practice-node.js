console.log("Hello NodeJS!")

// 定时器
setTimeout(() => {
  console.log('3 secondes have passed')
}, 3000);

var time = 0
var timer = setInterval(function () {
  time += 2;
  console.log(time + ' secondes have passed')
  if (time > 4)
    clearInterval(timer)
}, 2000);

// 路径
// 1、不包含当前文件名
console.log(__dirname)
// 2、包含当前文件名
console.log(__filename)

// global
console.log(global)