const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'alexajun-01',
    database: 'movieindoxxi',
    port:'3306'
})

module.exports = db
