﻿// 引用expess框架
const express = require('express');
// 创建博客展示页面路由
const home = express.Router();

home.get('/', (req, res) => {
	res.send('欢迎来到博客首页')

});
home.post('/123', function(req, res) {
    res.status(200),
    //json格式
    res.json(data)
    //传入页面
    // res.send()
});

// 将路由对象做为模块成员进行导出
module.exports = home;