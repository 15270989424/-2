var express = require('express');
var config = express.Router();

const dateFormat = require('dateformat');
const path = require('path');
const template = require('art-template')

template.defaults.root = path.join(__dirname, 'views');
template.defaults.imports.dateFormat = dateFormat;


let db=require("../config/db")

 
config.get('/',(req,res,next)=>{
	// 接收客户端传递过来的当前页参数
	let page = req.query.page || 1;
	// 每一页显示的数据条数
	let num=(page-1)*10 ;
	//sql查询 将用户信息从数据库中查询出来
//	let sql="SELECT * FROM visitor order by created_at desc limit "+num+",10 ";
	let sql="SELECT *,(select count(1) from visitor) as total FROM visitor order by created_at desc limit "+num+",10 "

  db.query(sql,(err,rows)=>{
    if(err){
   //   console.log(err);
      return;
    }
    
    // 查询用户数据的总数
	var count = JSON.parse(JSON.stringify(rows))[0].total;
	// 总页数
	var total = Math.ceil(count / 10);
	
      res.render('ssg/ssg-fz', {
      	users:rows ,
      	page: page	,
      	total:total
      });
  })
  

})



module.exports = config;