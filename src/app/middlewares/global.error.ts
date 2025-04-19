import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { ZodError } from 'zod';

import configuration from '@config/index';
import serverErrors from '@/core/errors/index';
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
  const { PrismaError, ApiError, MySQLError } = serverErrors;
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    const prismaError = PrismaError(error);
    ({ statusCode, message, errorMessages } = prismaError);
  } else if (error instanceof ZodError) {
    statusCode = 400;
    message = 'Validation Error';
    errorMessages = error.issues.map((issue) => ({
      path: issue.path.at(-1) as string,
      message: issue.message,
    }));
  } else if (error.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token, please log in again';
    errorMessages = [{ path: 'token', message }];
  } else if (error.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token has expired, please log in again';
    errorMessages = [{ path: 'token', message }];
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errorMessages = [{ path: '', message }];
  } else if (isMySQLError(error)) {
    const mysqlError = new MySQLError({
      ...error,
      name: error.name || 'MySQLError',
      message: error.sqlMessage || 'An unknown MySQL error occurred',
    });
    ({ statusCode, message, errorMessages } = mysqlError);
  } else if (error instanceof Error) {
    message = error.message;
    errorMessages = [{ path: '', message }];
  } else {
    message = 'An unknown error occurred';
    errorMessages = [{ path: '', message }];
  }

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errorMessages,
    stack: shouldShowStack() ? error.stack : undefined,
  });
};

/**
 * Helper: Check if an error is a MySQL error.
 */
function isMySQLError(error: any): error is { code: string; sqlMessage: string; name?: string } {
  return error && typeof error.code === 'string' && typeof error.sqlMessage === 'string';
}

/**
 * Helper: Decide if we should show the error stack.
 */
function shouldShowStack() {
  return configuration.node_env !== 'production' && configuration.show_stack_trace;
}

export default globalError;
