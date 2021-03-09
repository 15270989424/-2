// 引入用户集合的构造函数
// 引入用户集合的构造函数
const { msg } = require('../model/msg');

// 引用expess框架
const express = require('express');
// 创建博客展示页面路由
const fzjk = express.Router();

fzjk.get('/', (req, res) => {
	res.send('欢迎来到复制接口')

});

fzjk.post('/', function(req, res){
	msg.create(req.body);
    // console.log(req.body)
	// 将页面重定向到用户列表页面
	// res.redirect('/admin/user');
    res.send("ddddd")
});

// 将路由对象做为模块成员进行导出
module.exports = fzjk;