const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'rdsexamples.csnowlhsyziq.us-east-1.rds.amazonaws.com',
    user:  'admin',
    password: 'password',
    port: 3306,
})

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected...");
})