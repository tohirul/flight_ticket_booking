import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import Router from './router';
import middlewares from '@middlewares/index';
import status from 'http-status';
const app: Application = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(Router);

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
