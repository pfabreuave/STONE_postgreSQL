/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 */

const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
