import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodEffects } from 'zod';

const requestValidator =
  (schema: AnyZodObject | ZodEffects<AnyZodObject>) =>
  async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    // console.log('Request Body: ', req.body);
    try {
      // Directly pass req.body to the schema
      await schema.parseAsync(req.body);
      return next();
    } catch (error) {
      next(error);
    }
  };

export default requestValidator;
