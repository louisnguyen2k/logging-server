import { Express, Response, Request } from 'express';
import { RegisterRoutes } from './routes'; // here
import * as swaggerUi from 'swagger-ui-express';
function initRoutes(app: Express): void {
  app.use(
    '/api/docs/v1',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: '/swagger.json',
        docExpansion: 'none',
      },
      explorer: true,
    }),
  );
  RegisterRoutes(app);
  app.get('/', (req: Request, res: Response) =>
    res
      .setHeader('Content-Type', 'text/html')
      .status(200)
      .send(
        `Documents logging api windsoft: --> <a href="${req?.protocol}://${req?.headers?.host}/api/docs/v1">click here</a>`,
      ),
  );
}
export default initRoutes;
