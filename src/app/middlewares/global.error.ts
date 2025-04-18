import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { Prisma } from '@prisma/client';

import configuration from '@config/index';
import serverErrors from '@/core/errors/index';
import { ZodError } from 'zod';
import { IGenericErrorMessage } from '@/core/types/error.types';

/**
 * Global error handler middleware.
 */
const globalError: ErrorRequestHandler = (
  error,
  _req: Request,
  res: Response,

  _next: NextFunction
) => {
  const { ZodSchemaError, PrismaError, ApiError, MySQLError } = serverErrors;
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Handle Prisma errors
    const prismaError = PrismaError(error);
    statusCode = prismaError.statusCode;
    message = prismaError.message;
    errorMessages = prismaError.errorMessages;
  } else if (error instanceof ZodError) {
    // Handle Zod validation errors
    const simplifiedError = ZodSchemaError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error.name === 'JsonWebTokenError') {
    // Handle JWT invalid token
    statusCode = 401;
    message = 'Invalid token, please log in again';
    errorMessages = [{ path: 'token', message }];
  } else if (error.name === 'TokenExpiredError') {
    // Handle JWT expired token
    statusCode = 401;
    message = 'Token has expired, please log in again';
    errorMessages = [{ path: 'token', message }];
  } else if (error instanceof ApiError) {
    // Handle custom API errors
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = [{ path: '', message: error.message }];
  } else if ('code' in error && 'sqlMessage' in error) {
    // Handle MySQL errors using MySQLErrorHandler
    const mysqlError = new MySQLError(error);
    statusCode = mysqlError.statusCode;
    message = mysqlError.message;
    errorMessages = mysqlError.errorMessages;
  } else if (error instanceof Error) {
    // Handle generic errors
    message = error.message;
    errorMessages = [{ path: '', message: error.message }];
  } else {
    // Handle unknown errors
    message = 'An unknown error occurred';
    errorMessages = [{ path: '', message }];
  }

  // Send JSON response
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errorMessages,
    stack:
      configuration.node_env !== 'production' && configuration.show_stack_trace
        ? error.stack
        : undefined,
  });
};

export default globalError;
