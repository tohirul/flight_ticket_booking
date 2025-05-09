import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from '../types/common.types';
import { IGenericErrorMessage } from '../types/error.types';

const ZodSchemaError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path.length - 1],
      message: issue?.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default ZodSchemaError;
