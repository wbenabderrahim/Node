var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: '',
  database:'node'
});

con.connect();
module.exports =con ;