var mysql = require('mysql');

var connection = mysql.createPool({
    database: 'shops',
    user: 'restapi',
    password: '10gXWOqeaf!',
    host: 'superadmin.shop',
});
module.exports = connection;