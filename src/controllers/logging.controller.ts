import { Body, Post, Route, Tags, Security } from 'tsoa';
import { logger } from '@config';
import { withSuccess } from '@utils/BaseRespons';
import { SuccessResponseModel } from '../utils/BaseRespons';

import { LogsModel } from '@models';

@Route('logging')
@Tags('logging')
export class LoggingController {
  @Security('token')
  @Post('/{app_name}/info')
  public async info(@Body() body: any, app_name: string): Promise<SuccessResponseModel<any>> {
    logger.info({ message: `${JSON.stringify(body)}` });
    const payload = {
      app_name,
      tag: 'info',
      values: { ...body },
      create_at: new Date(),
    };

    console.log('payload', payload);
    const res = await LogsModel.collection.insertOne(payload);
    //LogsModel.create(payload);
    return withSuccess(res);
  }
  @Security('token')
  @Post('/{app_name}/error')
  public async error(@Body() body: any, app_name: string): Promise<SuccessResponseModel<any>> {
    logger.error({ message: `${JSON.stringify(body)}` });
    const payload = {
      app_name,
      tag: 'error',
      values: { ...body },
    };
    // const res = await LogsModel.create(payload);
    const res = await LogsModel.collection.insertOne(payload);
    return withSuccess(res);
  }
  @Security('token')
  @Post('/{app_name}/warn')
  public async warn(@Body() body: any, app_name: string): Promise<SuccessResponseModel<any>> {
    logger.warn({ message: `${JSON.stringify(body)}` });
    const payload = {
      app_name,
      tag: 'warn',
      values: { ...body },
    };
    // const res = await LogsModel.create(payload);
    const res = await LogsModel.collection.insertOne(payload);
    return withSuccess(res);
  }
}
