import express, { Application, Request, Response } from 'express';
import status from 'http-status';
import morgan from 'morgan';

import middlewares from '@middlewares/index';

import Router from './router';

const app: Application = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(Router);

interface Module {
  module: string;   
  path: string;     
  routes: Route[];
}

interface Route {
  method: string;
  path: string;
}

type Layer = {
  route?: {
    methods: { [key: string]: boolean };
    path: string;
  };
  name?: string;
  handle?: {
    stack: Layer[];
  };
  regexp?: {
    fast_slash?: boolean;
    toString: () => string;
  };
};

const getRoutes = (stack: Layer[], parentPath = ''): Module[] => {
  const modulesMap = new Map<string, { fullPath: string; routes: Route[] }>();

  for (const layer of stack) {
    if (layer.route) {
      const fullPath = parentPath + (layer.route?.path ?? '');
      const methods = Object.keys(layer.route.methods).map((method) => method.toUpperCase());

      if (!modulesMap.has(parentPath)) {
        modulesMap.set(parentPath, { fullPath: parentPath, routes: [] });
      }

      methods.forEach((method) => {
        modulesMap.get(parentPath)!.routes.push({
          method,
          path: fullPath,
        });
      });

    } else if (layer.name === 'router' && layer.handle?.stack) {
      const newParentPath = parentPath + (layer.regexp?.fast_slash ? '' : getPathFromRegexp(layer.regexp));
      const childModules = getRoutes(layer.handle.stack, newParentPath);

      childModules.forEach((mod) => {
        if (!modulesMap.has(mod.path)) {
          modulesMap.set(mod.path, { fullPath: mod.path, routes: [] });
        }
        modulesMap.get(mod.path)!.routes.push(...mod.routes);
      });
    }
  }

  const modules: Module[] = [];

  for (const [_, { fullPath, routes }] of modulesMap.entries()) {
    modules.push({
      module: getLastSegment(fullPath),
      path: fullPath,
      routes,
    });
  }

  return modules;
};

const getPathFromRegexp = (regexp: any): string => {
  let path = regexp?.toString()
    .replace('/^', '')
    .replace('\\/?(?=\\/|$)/i', '')
    .replace('/i', '')
    .replace(/\\\//g, '/');
    
  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  return path || '';
};

const getLastSegment = (path: string): string => {
  const segments = path.split('/').filter(Boolean);
  return segments[segments.length - 1] || '';
};


app.get('/routes', (_req: Request, res: Response) => {
  const routes = getRoutes((app._router.stack as unknown as Layer[]));
  res.json({
    message: 'List of all routes',
    routes,
  });
});



app.use((req: Request, res: Response) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: 'Invalid URL, please try again!',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Please check your URL and try again!',
      },
    ],
  });
});
app.use(middlewares.globalError);

export default app;
