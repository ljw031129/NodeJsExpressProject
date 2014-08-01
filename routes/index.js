var express = require('express');
var router = express.Router();

/* GET home page. */
//指定根路径的处理方法
/*router.get('/', function(req, res) {
    //用于渲染网页模板，index模板名称,title传入变量
  res.render('api', { title: 'Express' });

    *//*var body = 'Hello World';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);*//*
});*/
//指定特定的路径
/*app.get('/api', function(request, response) {
    response.send({name:"张三",age:40});
});*/
var blogEngine=require('../blog');
router.get('/', function(req, res) {
    res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});
module.exports = router;
