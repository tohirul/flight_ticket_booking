export default {
  local_uri: process.env.LOCAL_URI,
  port: Number(process.env.LOCAL_SERVER_PORT),
  database_url: process.env.DATABASE_URL,
  database: {
    username: process.env.LOCAL_DB_USERNAME,
    password: process.env.LOCAL_DB_PASSWORD,
    database: process.env.LOCAL_DB_NAME,
    host: process.env.LOCAL_DB_HOST || 'localhost',
    dialect: process.env.LOCAL_DIALECT || 'mysql',
    port: Number(process.env.LOCAL_DB_PORT) || 3306,
  },
  version: process.env.VERSION,
};
