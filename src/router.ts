import express, { Request, Response } from 'express';
import apiRoutes from '@app/routes';
import configuration from '@config/index';
import globalError from '@middlewares/global.error';

const Router = express.Router();
// Health check route
Router.get('/', (_req: Request, res: Response) => {
  res.json({
    message: `Server is running in ${configuration.node_env} mode`,
    environment: configuration.node_env,
    version: configuration.version || '1.0.0',
  });
});

Router.use(globalError);

Router.use('/api', apiRoutes);

export default Router;
