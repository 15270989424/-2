// 引入用户集合的构造函数
const { msgCopy } = require('../model/msgCopy');

// 引用expess框架
const express = require('express');
// 创建博客展示页面路由
const fwjk = express.Router();

fwjk.get('/', (req, res) => {
	res.send('欢迎来到访问接口')

});

fwjk.post('/', function(req, res){
	msgCopy.create(req.body);
    // console.log(req.body)
	// 将页面重定向到用户列表页面
	// res.redirect('/admin/user');
    res.json('1111')
});

// 将路由对象做为模块成员进行导出
module.exports = fwjk;