
var counter = function (arr) {
  return '一共有' + arr.length + '个元素在数组中'
}

var adder = function (a, b) {
  return `需要计算的两个值的和为：${a + b}`
}
var pi = 3.14

// module   模块化
module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
}