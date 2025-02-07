import "./env";
import merge from "lodash.merge";

const stage = process.env.STAGE || "local";

const baseConfig = {
  stage,
  node_env: process.env.NODE_ENV || "development",
  bcrypt_salt_rounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
  jwt: {
    secret: process.env.JWT_SECRET || "default_secret",
    access_token: process.env.JWT_ACCESS_TOKEN || "",
    access_token_expires_in: process.env.JWT_ACCESS_TOKEN_EXPIRY || "1h",
    refresh_token: process.env.JWT_REFRESH_TOKEN || "",
    refresh_token_expires_in: process.env.JWT_REFRESH_TOKEN_EXPIRY || "7d",
  },
};

// Dynamic environment config
const envConfig = require(`./${stage}`).default;

const config = merge(baseConfig, envConfig);

export default config;
