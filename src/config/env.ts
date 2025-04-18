import logger from '@/logs';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import path from 'path';

const envPath = path.join(process.cwd(), '.env');

const envConfig = dotenv.config({ path: envPath });
dotenvExpand.expand(envConfig);

if (envConfig.error) {
  logger.error('❌ Error loading environment variables:', envConfig.error);
  process.exit(1);
} else {
  logger.log({ level: 'info', message: '✅ Environment variables loaded successfully.' });
}
