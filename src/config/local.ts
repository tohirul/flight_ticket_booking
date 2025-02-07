export default {
  local_uri: process.env.LOCAL_URI || "http://localhost",
  port: Number(process.env.PORT) || 5000,
  database_url: process.env.DATABASE_URL,
};
