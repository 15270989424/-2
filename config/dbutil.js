
var mysql = require('mysql');

function createConnection() {
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'viang_ncjl120_co',
  password : '4bPFdHDAfiRrtFiw',
  database : 'viang_ncjl120_co'
});
}
module.exports.createConnection = createConnection;