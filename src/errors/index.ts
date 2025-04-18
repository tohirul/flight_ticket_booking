import ApiError from './api.error';
import PrismaError from './prisma.error';
import ZodSchemaError from './zodSchema.error';
import MySQLError from './mysql.error';

const serverErrors = {
  ApiError,
  ZodSchemaError,
  PrismaError,
  MySQLError,
};

export default serverErrors;
