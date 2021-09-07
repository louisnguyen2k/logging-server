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
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({
    filename: 'logs/warn.log',
    level: 'warn',
  }),
  new winston.transports.File({ filename: 'logs/info.log' }),
];
const LoggerInstance: Logger = winston.createLogger({
  level: level(),
  levels: { error: 0, warn: 1, info: 2, http: 3, debug: 4 },
  format,
  transports,
});

export { LoggerInstance as logger };
