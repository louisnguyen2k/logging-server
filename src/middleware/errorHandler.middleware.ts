import { Response, NextFunction, Request } from 'express';
import { ValidateError } from 'tsoa';
import { AppError } from '../globalType';
import { withError } from '@utils/BaseRespons';
import { logger } from '@config';
import { API_CODE } from '@utils/constants';

function errorHandler(err: any, req: Request, res: Response, next: NextFunction): Response | void {
  if (err instanceof ValidateError) {
    logger.warn({ message: `Caught Validation Error for ${req.path}:, ${JSON.stringify(err.fields)}` });
    return res.json(withError(err));
  }
  if (err instanceof Error) {
    logger.warn({ message: `Error api middware:, ${JSON.stringify(err)}` });
    return res.status(200).json({ ...withError(err) });
  }
  return res.json({ status: 0, code: err?.code, message: err.message });
}
export { errorHandler };
