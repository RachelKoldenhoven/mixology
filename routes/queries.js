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

  const client = new Client({
    ...dbConfig,
  });

  try {
    await client.connect();
  } catch (error) {
    throw new Error(error);
  }

  try {
    await createDb(databaseName, { client });
  } catch (error) {
    throw new Error(error);
  }

  try {
    await migrate({ client }, 'scripts/migrations');
  } catch (error) {
    throw new Error(error);
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
  const results = await pool.query('SELECT * FROM drinks ORDER BY id ASC');
  response.status(200).json(results.rows);
};

module.exports = { getDrinks };
