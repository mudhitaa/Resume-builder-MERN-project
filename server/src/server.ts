import express, { urlencoded, type Application } from "express";
import cors from "cors";

import router from "./router/router";
import ExceptionHandlingMiddleware from "./middleware/ExceptionHandlingMiddleware";

import connectDB from "./config/db";
import helmet from "helmet";
import rateLimit from "express-rate-limit";



const app: Application = express();

app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      "http://localhost:5173",
      "https://resume-builder-mern-project.vercel.app"
    ];
    if (!origin || allowed.includes(origin) || origin.endsWith(".vercel.app")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}))

//xxs prevent
app.use(helmet())

const limiter= rateLimit({
  windowMs:60000,
  limit:30
})
app.use(limiter)

const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 3,
  message: {
    status: false,
    message: "Too many accounts created, please try again later"
  }
});

export { authLimiter };


const PORT = 9005;
const HOST = "localhost";


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

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});