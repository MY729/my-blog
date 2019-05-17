var express = require('express');   //引入express模块
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例

var connection = mysql.createConnection({      //创建mysql实例
    host: 'localhost',
    user: 'root',
    password : 'root',
    database:'sys'
});
connection.connect();
var sql = 'SELECT * FROM message';
var str = ""
connection.query(sql, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    str = result
    console.log(result);  //数据库查询结果返回到result中
 
});
app.get('/message',function (req,res) {
    res.send(str);  ////服务器响应请求
});

var sql1 = 'SELECT * FROM info';
var str1 = ""
connection.query(sql1, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    str1 = result
    console.log(result);  //数据库查询结果返回到result中
 
});
app.get('/info',function (req,res) {
    res.send(str1);  ////服务器响应请求
});


connection.end();
app.listen(3000,function () {    ////监听3000端口
    console.log('Server running at 3000 port');
});