var express = require('express')
var bodyParser = require('body-parser') 
var mysql = require('mysql')

var server = express()
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())
// server.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')`
//   if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
//   else  next();
// });

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'gxd?0921',
  port: 3306,
  database:'guanBlog'
})

connection.connect();

// SELECT * FROM  guanxdBlog

connection.query('SELECT * FROM start', function(err, rows, fields) {
  if (err) {console.log('数据库查询错误了',err);}
  console.log('查询结果: ', rows);
});

connection.end();

server.get('/api/list',(request, response)=>{
  console.log('有人访问/api/list接口')
  response.send('这个是express服务器返回的内容--GET请求')
})

//TODO： 浏览器请求不到，报404，但postman可以。不知道为什么
server.post('/api/fourth', (req, response)=>{
  // console.log('有人访问/api/fourth接口', JSON.stringify(req.body))
  console.log('有人访问/api/fourth接口', req.body)
  response.send('这个是express服务器返回的内容--POST请求')
})

server.listen(7868)

console.log('express服务器运行在7868接口')