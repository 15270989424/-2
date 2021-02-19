var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: '218.6.8.226',
	user: 'viang_ncjl120_co',
	password: '4bPFdHDAfiRrtFiw',
	database: 'viang_ncjl120_co'

});
//开始连接数据库
connection.connect(function(err, data) {　　
			if(err) {　　　　
				throw err　　
			} else { 
				//连接成功后输出相应的数据　　　　
			//	console.log(data)　
				
				　}
			});
			
let query = (sql,callback)=>{
	connection.query(sql, function (err, rows) {
        callback(err, rows);
    })
}

exports.query = query
