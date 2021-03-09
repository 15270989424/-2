// 创建用户集合
// 引入mongoose第三方模块
const mongoose = require('mongoose');
// 导入bcrypt
const bcrypt = require('bcrypt');
// 引入joi模块
const Joi = require('joi');
// 创建用户集合规则
const usermsg = new mongoose.Schema({
	cip: {
		type: String,
		required: true

	},
	ctime: {
		type:String
	},
	curl: {
		type: String,
		// required: true
	},
	cwechar: {
		type: String,
		// required: true
	},
	ccity: {
		type: String,
		// required: true
	},
	cwx:{
		type: String,
		// required: true
	}
	
});

// 创建集合
const msg = mongoose.model('msg', usermsg);

// async function createUser () {
	
// 	const msg1 = await msg.create({
// 		cip: '11111',
// 		ctime: '111111',
// 		curl:'3131311313',
// 		cwechar: '11111111',
// 		ccity: "222222222",
// 		cwx:"1111111"
// 	});
// }
// createUser ()


// 将用户集合做为模块成员进行导出
module.exports = {
	msg
}