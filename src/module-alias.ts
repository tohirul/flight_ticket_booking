import { addAliases } from 'module-alias';
import path from 'path';

addAliases({
  '@': path.join(__dirname),
  '@core': path.join(__dirname, 'core'),
  '@config': path.join(__dirname, 'config'),
  '@app': path.join(__dirname, 'app'),
  '@middlewares': path.join(__dirname, 'app', 'middlewares'),
  '@modules': path.join(__dirname, 'app', 'modules'),
  '@approutes': path.join(__dirname, 'app', 'routes'),
  '@generated': path.join(__dirname, '../prisma', 'generated'),
});
