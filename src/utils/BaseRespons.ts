import { API_CODE } from '@utils/constants';
export interface ErrorResponseModel {
  status: number;
  code: number | string;
  message?: string;
  // error: any;
  errors?: any;
  debug?: any;
}
export interface SuccessResponseModel<T> {
  status: number;
  code: number;
  message?: string;
  data: T;
  create_at?: Date;
}
export function withError(error: any, errors?: any): ErrorResponseModel {
  return {
    status: 0,
    code: error.code || API_CODE.ERROR.code,
    message: error.message || API_CODE.ERROR.message,
    debug: process.env.NODE_ENV === 'development' ? error : undefined,
    // error: error,
    errors,
  };
}
export function withSuccess<T>(data: T): SuccessResponseModel<T> {
  return {
    status: 1,
    code: 1,
    message: 'Thành công',
    data,
  };
}
