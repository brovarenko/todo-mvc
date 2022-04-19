const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'todo',
//   password: '20011998',
//   port: 5433,
// });

module.exports = pool;
