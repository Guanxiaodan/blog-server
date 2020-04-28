var http = require('http')

var server = http.createServer(function(request, response){
  console.log('有人访问了服务器')
  response.write('给你了')
  response.end()
})

server.listen(2243)
console.log('服务器在2243端口运行...')