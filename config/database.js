const mysql = require('mysql');

const con = mysql.createConnection({
    port:3306,
    host:"127.0.0.1",
    user:'exampleuser',
    password:'exampleuser',
    database:'exampledb',
    connectionLimit:10
});

con.connect((err)=>{
    if(err){
        console.warn(err.message);
    }
});

module.exports = con;