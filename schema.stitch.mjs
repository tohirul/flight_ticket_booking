import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// Fix __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaDir = path.join(__dirname, 'prisma', 'schema');
const schemaOutputPath = path.join(__dirname, 'prisma', 'schema.prisma');

if (!fs.existsSync(schemaDir)) {
  console.error('❌ prisma/schema directory does not exist.');
  process.exit(1);
}

const schemaFiles = fs.readdirSync(schemaDir).filter((file) => file.endsWith('.prisma'));

const header = `generator client {
  provider = "prisma-client-js"
  previewFeatures = ["prismaSchemaFolder"]
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}\n\n`;

let models = '';

schemaFiles.forEach((file) => {
  const content = fs.readFileSync(path.join(schemaDir, file), 'utf-8');
  models += `\n${content}\n`;
});

fs.writeFileSync(schemaOutputPath, header + models.trim(), 'utf-8');

console.log('✅ Prisma schema merged successfully!');
