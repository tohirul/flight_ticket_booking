import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import Router from './router';
import middlewares from 'app/middlewares';
import status from 'http-status';
const app: Application = express();

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(morgan('dev'));

app.use(Router);
app.use(middlewares.globalError);

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

export default app;
