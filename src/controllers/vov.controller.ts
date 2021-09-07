import { Body, Post, Route, Tags, Security } from 'tsoa';
import { withSuccess } from '@utils/BaseRespons';
import { SuccessResponseModel } from '../utils/BaseRespons';
import * as winston from 'winston';
import { Logger } from 'winston';

winston.addColors({ error: 'red', warn: 'yellow', info: 'green', http: 'magenta', debug: 'white' });
const level = () => 'debug';
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(({ level, message, timestamp }) => `<${level}><${timestamp}>: ${message}`),
);
const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/vov/error.log',
    level: 'error',
  }),
  new winston.transports.File({
    filename: 'logs/vov/warn.log',
    level: 'warn',
  }),
  new winston.transports.File({ filename: 'logs/vov/info.log' }),
];
const loggerVov: Logger = winston.createLogger({
  level: level(),
  levels: { error: 0, warn: 1, info: 2, http: 3, debug: 4 },
  format,
  transports,
});

@Route('vov')
@Tags('vov')
export class VovLoggingController {
  @Security('token')
  @Post('/info')
  public async info(@Body() body: any): Promise<SuccessResponseModel<any>> {
    loggerVov.info({ message: `${JSON.stringify(body)}` });
    return withSuccess(body);
  }
  @Security('token')
  @Post('/error')
  public async error(@Body() body: any): Promise<SuccessResponseModel<any>> {
    loggerVov.error({ message: `${JSON.stringify(body)}` });
    return withSuccess(body);
  }
  @Security('token')
  @Post('/warn')
  public async warn(@Body() body: any): Promise<SuccessResponseModel<any>> {
    loggerVov.warn({ message: `${JSON.stringify(body)}` });
    return withSuccess(body);
  }
}
