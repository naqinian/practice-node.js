// 项目引入
const superagent = require('superagent')
const cheerio = require('cheerio')

// 指定需要爬取的域名
const mainurl = 'https://api.vc.bilibili.com/link_draw/v2/Doc/list?category=all&type=new&page_num=0&page_size=20'

// 获取数据
superagent.get(mainurl).end((err,data)=>{
  if(err) throw err;
  console.log(data.res.text)
})
