//1. 引入express
const express = require('express');
var history = require('connect-history-api-fallback');

//2. 创建应用对象
const app = express();
app.use(history());
app.use(express.static(__dirname + "/static"))
//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应体
    response.send({
        name: "tom",
        age: 18
    });
});

//4. 监听端口启动服务
app.listen(5005, (err) => {
    if (!err) console.log("服务已经启动, 5005 端口监听中....");
});