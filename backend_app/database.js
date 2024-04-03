const mysql = require('mysql');

const mysqlConection = mysql.createConnection({

    host: 'localhost',
    user: 'admin',
    password: 'qwaszx',
    database: 'uploadBD2',
    multipleStatements: true,

});

mysqlConection.connect(function(err) {

    if (err) {

        console.log(err);
        return;

    } else {

        console.log('DATABASE onLine..');

    }

});

module.exports = mysqlConection;