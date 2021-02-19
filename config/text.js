//npm install mysqlvar mysql = require('mysql');//需要事先在mysql中创建一个数据库 同样创建一个表格 //但在 mongodb中 不需要手动创建 直接在语句中操作
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'viang_ncjl120_co',
	password: '4bPFdHDAfiRrtFiw',
	database: 'viang_ncjl120_co'
});
connection.connect(function(err, data) {　　
			if(err) {　　　　
				throw err　　
			} else { 
				//连接成功后输出相应的数据　　　　
				console.log(data)　
				　}
			});
	//查询mysql所有 数据
			
connection.query('SELECT * FROM visitor', function(error, results, fields) {　　
					if(error) throw error;
					　　 //这是对传过来的数据的处理 
					　　
					let data = JSON.stringify(results);　　
					let jsondata = JSON.parse(data);　　
					console.log(jsondata)
	})