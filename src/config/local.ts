export default {
  local_uri: process.env.LOCAL_SERVER_URI || 'http://localhost',
  port: Number(process.env.LOCAL_SERVER_PORT) || 5000,
  database: {
    username: process.env.LOCAL_DB_USERNAME,
    password: process.env.LOCAL_DB_PASSWORD,
    database: process.env.LOCAL_DB_NAME,
    host: process.env.LOCAL_DB_HOST || 'localhost',
    dialect: process.env.LOCAL_DIALECT || 'mysql',
    port: Number(process.env.LOCAL_DB_PORT) || 3306,
  },
  version: process.env.VERSION || '1.0.0',
};
