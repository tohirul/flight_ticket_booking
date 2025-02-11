import globalError from './global.error';
import requestValidator from './requestValidator.middleware';

const middlewares = {
  requestValidator: requestValidator,
  globalError: globalError,
};

export default middlewares;
