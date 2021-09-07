import 'module-alias/register';
import express from 'express';
import { Express } from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler, notFoundHandler, trimRequestAll } from './middleware';
import { environment, logger } from './config';
import initRoutes from './routes';

export class MyServer {
  private app: Express;
  constructor() {
    this.app = express();
    this.useMiddlewareExpress();
  }

  /**
   * @summary
   * @returns void
   */
  public useMiddlewareExpress(): void {
    this.app.use(cors());
    this.app.use(cors({ optionsSuccessStatus: 200 }));
    this.app.use(urlencoded({ extended: true }));
    this.app.use(json());
    this.app.use(morgan('combined'));
    this.app.use(express.static('public'));
    this.app.use(trimRequestAll);
    initRoutes(this.app);
    this.app.use(errorHandler);
    this.app.use(notFoundHandler);
  }

  /**
   * @summary
   * @returns void
   */
  public liten(): void {
    const PORT: number = environment.port;
    this.app.listen(PORT, () => {
      logger.info({ message: `Server successfully started at port ${PORT}` });
    });
  }
}

const server: MyServer = new MyServer();
server.liten();
