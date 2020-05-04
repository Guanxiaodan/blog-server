var http = require('http')

var server = http.createServer(function(request, response){
  console.log('有人访问了node服务器',request.url)
  if(request.url == '/blog/myInfo'){
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    response.write('给你了')
    response.end()
  }
  if(request.url == '/blog/third'){
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    response.write('Post请求。node给你')
    response.end()
  }

})

server.listen(2243)
console.log('node服务器在2243端口运行....')