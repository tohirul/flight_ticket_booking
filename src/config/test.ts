
export default {
    test_uri: process.env.TEST_SERVER_URI ,
    port: Number(process.env.TEST_SERVER_PORT) || 5000,
    database: {
      username: process.env.TEST_DB_USERNAME,
      password: process.env.TEST_DB_PASSWORD,
      database: process.env.TEST_DB_NAME,
      host: process.env.TEST_DB_HOST,
      dialect: process.env.TEST_DIALECT || 'mysql',
      port: Number(process.env.TEST_DB_PORT) || 3306,
    },
    version: process.env.VERSION,
}