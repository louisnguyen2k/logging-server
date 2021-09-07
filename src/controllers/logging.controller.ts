import { Body, Post, Route, Tags, Security } from 'tsoa';
import { logger } from '@config';
import { withSuccess } from '@utils/BaseRespons';
import { SuccessResponseModel } from '../utils/BaseRespons';

@Route('logging')
@Tags('logging')
export class UsersController {
  @Security('token')
  @Post('/info')
  public async info(@Body() body: any): Promise<SuccessResponseModel<any>> {
    console.log('body', body);
    logger.info({ message: `${JSON.stringify(body)}` });
    return withSuccess(body);
  }
  @Security('token')
  @Post('/error')
  public async error(@Body() body: any): Promise<SuccessResponseModel<any>> {
    console.log('body', body);
    logger.error({ message: `${JSON.stringify(body)}` });
    return withSuccess(body);
  }
  @Security('token')
  @Post('/warn')
  public async warn(@Body() body: any): Promise<SuccessResponseModel<any>> {
    console.log('body', body);
    logger.warn({ message: `${JSON.stringify(body)}` });
    return withSuccess(body);
  }
}
