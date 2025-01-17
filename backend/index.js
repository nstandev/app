const express = require('express');
const mysql = require('mysql2');
const client = require('prom-client');

// Enable the default metrics collection
client.collectDefaultMetrics();

const app = express();
const port = 3001;

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
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

// Expose metrics at the /metrics endpoint
app.get('/metrics', async (req, res) => {
    try {
        res.set('Content-Type', client.register.contentType);
        res.send(await client.register.metrics());
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Backend API listening on this port ${port}`);
});

// docker run --name mariadb-container -e MARIADB_ROOT_PASSWORD=yourpassword -p 3306:3306 -d mariadb:10.6