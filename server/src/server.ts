import express, { urlencoded, type Application } from "express";
import cors from "cors";

import router from "./router/router";
import ExceptionHandlingMiddleware from "./middleware/ExceptionHandlingMiddleware";

const app: Application = express();

const PORT = 9005;
const HOST = "localhost";

app.use(cors())


//body parsing for server to read the data
app.use(express.json({
    limit:"5mb"
}));
//urlencoded
app.use(express.urlencoded())


// routes
app.use("/api/v1/", router);

// 404
app.use((req, res, next) => {
  next({
    code: 404,
    detail: "Route not found"
  });
});

// error middleware
app.use(ExceptionHandlingMiddleware);

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});