export default {
  local_uri: process.env.LOCAL_URI || 'http://localhost',
  port: Number(process.env.PORT) || 5000,
  database_url: process.env.DATABASE_URL,
  version: process.env.VERSION || '1.0.0',
};
