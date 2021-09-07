/**  Response model */
export interface AppError extends Error {
  message: string;
  code?: number;
}
