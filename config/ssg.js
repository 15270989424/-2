var express = require('express');
var ssg= express.Router();
var mysql = require('mysql');
ssg.get('/',function (req,res,next) {
 res.writeHead(200, {
    "Content-Type": "text/html;charset=utf-8"
  });
  console.log("执行到了这了");
var connection = mysql.createConnection({
	host: '218.6.8.226',
	user: 'viang_ncjl120_co',
	password: '4bPFdHDAfiRrtFiw',
	database: 'viang_ncjl120_co'
});
connection.connect(function(err, data) {　　
			if(err) {　　　　
				throw err　　
			} else { 
				//连接成功后输出相应的数据　　　　
				//console.log(data)　
				
				　}
			});
	//查询mysql所有 数据
			
const i = 0;
const iii = 10

connection.query('SELECT * FROM visitor limit 1,10', function(err, rows) {　　
if(err){
   //   console.log(err);
      return;
    }

for(var i in rows){

   /*   console.log(rows);
      var temp=rows[i].id;
      console.log(temp);*/
    }
	

//console.log(rows)

   result=JSON.stringify(rows);//转换成JSON String格式
   // console.log(result);
	res.end(result);
	
//res.render('ssg/ssg-fz', {
//		users: result,
////		page: page,
////		total: total
//	});
//
});
	

});

module.exports = ssg;