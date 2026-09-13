import { ErrorRequestHandler, RequestHandler } from "express";
import { ApiError } from "../utils/api-error";
import { ApiResponse } from "../types/common.types";

export const errorHandler: ErrorRequestHandler = (
  error:unknown,
  _request,
  response,
  _next
) => {
  const statusCode = error instanceof ApiError ? error?.statusCode : 500;
  const message = error instanceof Error ? error.message : "An unexpected error occurred."

  response.status(statusCode).json({
    success: false,
    message
  } satisfies ApiResponse<never>)
}