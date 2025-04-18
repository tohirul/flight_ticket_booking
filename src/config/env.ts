import path from 'path';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import logger from '@/core/logs';

// Define the path to the .env file
const envFilePath = path.resolve(process.cwd(), '.env');

// Load and expand environment variables
const env = dotenv.config({ path: envFilePath });

if (env.error) {
  logger.error('❌ Failed to load environment variables.');
  logger.error(env.error);
  process.exit(1);
}

dotenvExpand.expand(env);
