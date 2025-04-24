import "dotenv/config";
import express, { Express, Request, Response } from "express";
import cors from "cors";

// Run Application
const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("test 2");
});

// Start

app.listen(process.env.PORT, () => {
  console.log(
    `Listening on API running ${process.env.BASE_URL}:${process.env.PORT}`
  );
});
