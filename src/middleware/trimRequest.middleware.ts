import { Response, NextFunction, Request } from 'express';
import { trimStringProperties } from '@helpers';

const trimRequestAll = function (req: Request, res: Response, next: NextFunction) {
  if (req.body) trimStringProperties(req.body);
  if (req.params) trimStringProperties(req.params);
  if (req.query) trimStringProperties(req.query);
  next();
};

const trimRequestBody = function (req: Request, res: Response, next: NextFunction) {
  if (req.body) trimStringProperties(req.body);
  next();
};

const trimRequestParam = function (req: Request, res: Response, next: NextFunction) {
  if (req.params) trimStringProperties(req.params);
  next();
};

const trimRequestQuery = function (req: Request, res: Response, next: NextFunction) {
  if (req.query) trimStringProperties(req.query);
  next();
};

export { trimRequestAll, trimRequestBody, trimRequestParam, trimRequestQuery };
