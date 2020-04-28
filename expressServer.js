var express = require('express')

var server = express()

server.get('/',(request, response)=>{
  response.send('这个是express服务器返回的内容--GET请求')
})

server.post('/', (request, response)=>{
  response.send('这个是express服务器返回的内容--POST请求')
})

server.listen(7868)

console.log('express服务器运行在7868接口')