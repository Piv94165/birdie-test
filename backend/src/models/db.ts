const mysql = require("mysql");

var connection = mysql.createPool({
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    user: 'birdie',
    password: '7VsGDAXfpEH7Bee',
    database: 'birdietest'
});

export default connection;