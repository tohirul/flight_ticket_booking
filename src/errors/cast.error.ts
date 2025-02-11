import { Prisma } from '@prisma/client';
import { IGenericErrorResponse } from 'types/common.types';
import { IGenericErrorMessage } from 'types/error.types';

const castError = (err: Prisma.PrismaClientKnownRequestError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = [
    {
      path: err.meta?.target?.toString() || 'unknown',
      message: err.message || 'Invalid Input or Data Format',
    },
  ];

  let message = 'Cast error';
  const statusCode = 400;

  if (err.code === 'P2025') {
    message = 'Record to update or delete not found';
  } else if (err.code === 'P2000') {
    message = 'Invalid value for field';
  }

  return {
    statusCode,
    message,
    errorMessages: errors,
  };
};

export default castError;
