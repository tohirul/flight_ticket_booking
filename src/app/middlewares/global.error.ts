import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { ZodError } from 'zod';
import configuration from 'config';
import { IGenericErrorMessage } from 'types/error.types';
import serverErrors from 'errors';

const globalError: ErrorRequestHandler = (
  error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  // console.log(error);

  let statusCode = 500;
  let message = 'Something went wrong';
  let errorMessages: Array<IGenericErrorMessage> = [];

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      message = `Duplicate value entered for a unique field.`;
      errorMessages = [
        {
          path: error.meta?.target?.toString() || '',
          message: `Duplicate entry for the field: ${error.meta?.target?.toString()}`,
        },
      ];
      statusCode = 400;
    } else if (error.code === 'P2003') {
      message = 'Foreign key constraint failed';
      errorMessages = [
        {
          path: error.meta?.target?.toString() || '',
          message: `The referenced entity does not exist.`,
        },
      ];
      statusCode = 400;
    }
  } else if (error.code === 'P2025') {
    message = 'Record not found';
    errorMessages = [
      { path: '', message: 'The record you are trying to update/delete does not exist.' },
    ];
    statusCode = 404;
  } else if (error.code === 'P2000') {
    message = 'Input value too long';
    errorMessages = [
      { path: '', message: 'The provided value is too long for the database field.' },
    ];
    statusCode = 400;
  } else if (error instanceof ZodError) {
    console.log(error);
    const simplifiedError = serverErrors.zodSchemaError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error?.name === 'ValidationError') {
    const simplifiedError = serverErrors.validationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error?.name === 'CastError') {
    const simplifiedError = serverErrors.castError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof serverErrors.ApiError) {
    statusCode = error?.statusCode;
    message = error.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: configuration.node_env !== 'production' ? error?.stack : undefined,
  });
};

export default globalError;
