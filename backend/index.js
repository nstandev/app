const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'yourpassword',
  database: process.env.DB_NAME || 'mydatabase'
});


// API endpoint
app.get('/api', (req, res) => {
    connection.query('SELECT * FROM mytable', (error, results) => {
        console.log("WE ARE HERE!!!")
        if (error) throw error;
        res.send(results);
    });
    // res.send("ccccc")
});

app.listen(port, () => {
    console.log(`Backend API listening on this port ${port}`);
});

// docker run --name mariadb-container -e MARIADB_ROOT_PASSWORD=yourpassword -p 3306:3306 -d mariadb:10.6