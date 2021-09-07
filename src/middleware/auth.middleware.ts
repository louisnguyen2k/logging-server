import * as express from 'express';
import { API_CODE } from '@utils/constants';
import { environment, logger } from '../config';
function expressAuthentication(request: express.Request, securityName: string, scopes?: string[]): Promise<string> {
  if (securityName === 'token') {
    const tokenServer: string = environment.token || 'windsoft@2018';
    const { token } = request.headers;
    if (token === tokenServer) return Promise.resolve(token);
  }

  return Promise.reject(API_CODE.UNAUTHORIZED);
}
export { expressAuthentication };
