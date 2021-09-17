import { Body, Post, Route, Tags, Security } from 'tsoa';
import { logger } from '@config';
import { withSuccess } from '@utils/BaseRespons';
import { SuccessResponseModel } from '../utils/BaseRespons';

import { LogsModel } from '@models';

@Route('logging')
@Tags('logging')
export class LoggingController {
  @Security('token')
  @Post('/info')
  public async info(@Body() body: any): Promise<SuccessResponseModel<any>> {
    logger.info({ message: `${JSON.stringify(body)}` });
    body.tag = 'info';
    const res = await LogsModel.create(body);
    return withSuccess(res);
  }
  @Security('token')
  @Post('/error')
  public async error(@Body() body: any): Promise<SuccessResponseModel<any>> {
    logger.error({ message: `${JSON.stringify(body)}` });
    body.tag = 'error';
    const res = await LogsModel.create(body);
    return withSuccess(res);
  }
  @Security('token')
  @Post('/warn')
  public async warn(@Body() body: any): Promise<SuccessResponseModel<any>> {
    logger.warn({ message: `${JSON.stringify(body)}` });
    body.tag = 'warn';
    const res = await LogsModel.create(body);
    return withSuccess(res);
  }
}
