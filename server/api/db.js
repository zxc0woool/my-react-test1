var mysql = require('mysql');

var models = {

    mysql: {

        host: '192.168.232.129', 
        port: '3701',
        user: 'root',
        password: 'qwaszx',
        database: 'test'

    }

}

// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();

module.exports = conn;
console.log('add --- db.js');