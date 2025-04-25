import { IGenericErrorMessage } from './error.types';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;

  errorMessages: IGenericErrorMessage[];
};

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export type IAPIResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string | null;
  response: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
  errors?: IGenericErrorMessage[];
};
