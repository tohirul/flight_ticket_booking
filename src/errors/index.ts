import ApiError from './api.error';
import castError from './cast.error';
import validationError from './validation.error';
import zodSchemaError from './zodSchema.error';

const serverErrors = {
  ApiError,
  castError,
  validationError,
  zodSchemaError,
};

export default serverErrors;
