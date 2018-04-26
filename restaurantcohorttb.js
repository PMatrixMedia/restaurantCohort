// JavaScript source code
const mysql = require('mysql2');


var config =
    {
        host: 'webapp-mysqldbserver-abfbb289-34681.mysql.database.azure.com',
        user: 'pmatrixmedia@webapp-mysqldbserver-abfbb289-34681',
        password: 'Smucohort12345',
        database: 'restaurantcohort',
        port: 3306,
        ssl: true
    };

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
           queryDatabase();
    }   
});

function queryDatabase(){
       conn.query('DROP TABLE IF EXISTS inventory;', function (err, results, fields) { 
            if (err) throw err; 
            console.log('Dropped inventory table if existed.');
        })
       conn.query('CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), Phone INTEGER, e-mail VARCHAR(50);', 
            function (err, results, fields) {
                if (err) throw err;
            console.log('Created inventory table.');
        })
       conn.query('INSERT INTO inventory (name, Phone, e-mail) VALUES (?, ?, ?);', ['Richard', 555-555-5555, 'rich@yourwood.net'], 
            function (err, results, fields) {
                if (err) throw err;
            else console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
       conn.query('INSERT INTO inventory (name, Phone, e-mail) VALUES (?, ?, ?);', ['Jon', 555-555-5551, 'me@metoo.com'], 
            function (err, results, fields) {
                if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
       conn.query('INSERT INTO inventory (name, Phone, e-mail) VALUES (?, ?, ?);', ['Billy', 555-555-5554, 'billy@pokemontrainer.net'], 
        function (err, results, fields) {
                if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
        })
       conn.end(function (err) { 
        if (err) throw err;
        else  console.log('Done.') 
        });
};