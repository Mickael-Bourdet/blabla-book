import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./src/router/router.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

// Run Application
const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

//Middleware error
app.use(errorHandler);

// Start
app.listen(process.env.PORT, () => {
  console.log(`Listening on API running ${process.env.BASE_URL}:${process.env.PORT}`);
});
