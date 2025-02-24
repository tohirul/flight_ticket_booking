import globalError from './global.error';
import requestValidator from './requestValidator';

const middlewares = {
  requestValidator: requestValidator,
  globalError: globalError,
};

export default middlewares;
