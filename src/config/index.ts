import './env';
import merge from 'lodash.merge';
import local from './local';
import production from './prod';
import development from './dev';

const stage = process.env.STAGE || 'local';

interface Config {
  port?: number;
  local_uri?: string;
  version?: string;
  stage: string;
  node_env: string;
  bcrypt_salt_rounds: number;
  database_url?: string;
  show_stack_trace: boolean;
  database?: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: string;
    port: number;
  };
  jwt: {
    secret: string;
    access_token: string;
    access_token_expires_in: string;
    refresh_token: string;
    refresh_token_expires_in: string;
  };
}

const baseConfig: Config = {
  stage,
  node_env: process.env.NODE_ENV || 'development',
  bcrypt_salt_rounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
  show_stack_trace: process.env.SHOW_STACK_TRACE === 'true',
  jwt: {
    secret: process.env.JWT_SECRET || 'default_secret',
    access_token: process.env.JWT_ACCESS_TOKEN || '',
    access_token_expires_in: process.env.JWT_ACCESS_TOKEN_EXPIRY || '1h',
    refresh_token: process.env.JWT_REFRESH_TOKEN || '',
    refresh_token_expires_in: process.env.JWT_REFRESH_TOKEN_EXPIRY || '7d',
  },
};

// Dynamic environment config
type EnvConfig = {
  local: typeof local;
  production: typeof production;
  development: typeof development;
};

const envConfig: EnvConfig = {
  local: { ...local },
  production: { ...production },
  development: { ...development },
};

const configuration = merge(baseConfig, envConfig[stage as keyof EnvConfig]);

export default configuration;
