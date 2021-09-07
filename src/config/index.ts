const env = process.env.NODE_ENV || 'development';
const environment = require('./environment')[env];
export * from './logger';
export { environment };
