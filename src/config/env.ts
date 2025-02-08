import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import path from 'path';

const envPath = path.join(process.cwd(), '.env');

const envConfig = dotenv.config({ path: envPath });
dotenvExpand.expand(envConfig);

if (envConfig.error) {
  console.error('❌ Error loading environment variables:', envConfig.error);
  process.exit(1);
} else {
  console.log('✅ Environment variables loaded successfully.');
}
