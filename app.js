var express = require('express');
var app = express();
 
//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});
 
var resData = [
    {name: 'cycy',age: 22}
]
 
//写个接口123
app.get('/123', function(req, res){
    //req是请求，res是响应
    res.status(200),
    res.json(resData)
});
 

//配置服务端口
var server = app.listen(3000, function () {
    console.log('服务器已启动！');
})
