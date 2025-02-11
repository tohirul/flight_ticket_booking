import { Prisma } from '@prisma/client';
import { IGenericErrorResponse } from 'types/common.types';
import { IGenericErrorMessage } from 'types/error.types';

const validationError = (err: Prisma.PrismaClientKnownRequestError): IGenericErrorResponse => {
  const message = 'Validation error';
  const statusCode = 400;

  const errors: IGenericErrorMessage[] = [];

  if (err.code === 'P2002') {
    // Unique constraint violation (e.g., duplicate entry for unique field)
    errors.push({
      path: err.meta?.target?.toString() || 'unknown',
      message: `Duplicate entry for unique field: ${err.meta?.target?.toString()}`,
    });
  } else if (err.code === 'P2003') {
    // Foreign key constraint violation (e.g., attempting to reference a non-existent record)
    errors.push({
      path: err.meta?.target?.toString() || 'unknown',
      message: `Foreign key constraint failed. The referenced record does not exist.`,
    });
  } else if (err.code === 'P2025') {
    // Record not found (e.g., trying to update or delete a non-existing record)
    errors.push({
      path: 'record',
      message: 'Record to update or delete not found.',
    });
  } else if (err.code === 'P2000') {
    // Invalid value for field (e.g., data type mismatch)
    errors.push({
      path: err.meta?.target?.toString() || 'unknown',
      message: 'Invalid value for field. Please check your input data.',
    });
  } else {
    // Handle any other Prisma errors
    errors.push({
      path: 'unknown',
      message: err.message || 'Validation failed. Please check the input data.',
    });
  }

  return {
    statusCode,
    message,
    errorMessages: errors,
  };
};

export default validationError;
