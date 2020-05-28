const axios = require('axios')

let url1 = "https://api.vc.bilibili.com/link_draw/v2/Doc/list?category=all&type=new&page_num=0&page_size=20"


let url2 = "https://users.qzone.qq.com/fcg-bin/cgi_get_portrait.fcg?uins=1830441485"

const url = url2

// axios.get(url).then((data) => { 
//   console.log(data.data.data.total_count) 
// })

axios.get(url).then((data) => {
    console.log(data)
})