const { Pool } = require('pg');

const pool = new Pool({
    user: 'myuser',         // PostgreSQL username
    host: 'localhost',      // Database host
    database: 'mydb',       // Database name
    password: 'mypassword', // PostgreSQL password
    port: 5432,             // Default PostgreSQL port
})

module.exports = pool;