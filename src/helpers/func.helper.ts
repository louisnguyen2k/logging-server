import * as express from 'express';
export function getBaseServer(request: express.Request): string {
  return `${request.protocol}://${request.headers.host}`;
}
export function getFullUrl(request: express.Request, path?: string): string {
  if (!path) {
    return null;
  }
  const correctPath = path.replace(/^\//g, '');
  return `${request.protocol}://${request.headers.host}/${correctPath}`;
}

function cleanupText(text) {
  return (
    text &&
    text // Ensure text exists
      .trim() // Trim left and right spaces
      .replace(/\n{2,}/g, '\n\n') // Replace 2+ linebreaks with 2 ones
      .replace(/ +/g, ' ')
  ); // Replace consecutive spaces with one
}
export const trimStringProperties = (obj) => {
  if (obj !== null && typeof obj === 'object') {
    for (let prop in obj) {
      if (typeof obj[prop] === 'object') {
        return trimStringProperties(obj[prop]);
      }
      if (typeof obj[prop] === 'string') {
        obj[prop] = cleanupText(obj[prop]);
      }
    }
  }
};
