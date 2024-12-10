const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'mydatabase'
});


// API endpoint
app.get('/api', (req, res) => {
    connection.query('SELECT * FROM mytable', (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Backend API listening on this port ${port}`);
});