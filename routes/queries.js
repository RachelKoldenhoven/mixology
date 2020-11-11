const { createDb, migrate } = require('postgres-migrations');
const { Pool, Client } = require('pg');

// import statement was causing proxy fail
const databaseName = 'mixology';

async function db() {
  const dbConfig = {
    database: 'mixology',
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

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mixology',
  password: 'password',
  port: 5432,
});

const getDrinks = (request, response) => {
  console.log('sdljfldsjfldsfjldsfjdlsf');
  client.query('SELECT * FROM drinks ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    console.log(response);
    response.status(200).json(results.rows);
  });
};

module.exports = { getDrinks };
