// 事件模块

// 1、引入模块
var events = require('events');

// 2、创建EventEmitter对象  new=>实例化
var myEmitter = new events.EventEmitter();

// 3、注册事件
myEmitter.on('event',(msg)=>{
  setImmediate(()=>{
    console.log('注册事件：',msg)
  })
})

// 4、触发事件
myEmitter.emit('event','实现事件并传递此参数到注册事件的回调函数中')


console.log('异步操作')
