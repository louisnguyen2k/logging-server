import { Request, Response } from 'express';
function notFoundHandler(req: Request, res: Response) {
  res.status(404).send({
    message: 'not found',
  });
}
export { notFoundHandler };
