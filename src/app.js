import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import signupRouter from "./routes/user.route.js";

app.use("/api", signupRouter);

export { app };
