import express from "express"
import cors from "cors"
import { ApiResponse } from "./types/common.types";
import { API_PREFIX } from "./config/constants";
import { apiRouter } from "./routes";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/no-found.middleware";

export const app = express();

app.disable("x-powered-by");
app.use(express.json({limit: "2mb"}));
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.get("/", (_request, response) => {
  const body: ApiResponse<never> = {
    success: true,
    message: "OneMarketplace.io API is running."
  }

  response.status(200).json(body);
});

app.use(API_PREFIX, apiRouter);
app.use(notFoundHandler);
app.use(errorHandler);
