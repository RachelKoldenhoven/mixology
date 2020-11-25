const { createDb, migrate } = require('postgres-migrations');
const { Pool, Client } = require('pg');

// import statement was causing proxy fail
const databaseName = 'mixology';

async function db() {
  const dbConfig = {
    database: 'mixology',
    // user: 'gina',
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 5432,
  };
  console.log('creating db');
  const client = new Client({
    ...dbConfig,
  });
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }

  try {
    await createDb(databaseName, { client });
  } finally {
    // await client.end();
  }

  try {
    await migrate({ client }, 'scripts/migrations');
  } finally {
    // await client.end();
  }
}

db();

const pool = new Pool({
  database: 'mixology',
  // user: 'gina',
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
});
pool.connect();

const getDrinks = async (request, response) => {
  let results = await pool.query('SELECT * FROM drinks ORDER BY id ASC');
  response.status(200).json(results.rows);
};

module.exports = { getDrinks };
