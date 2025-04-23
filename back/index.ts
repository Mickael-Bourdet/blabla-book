import "dotenv/config";
import express, { Express, Request, Response } from "express";
import cors from "cors";

// Run Application
const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("test");
});

// Start

app.listen(process.env.PORT, () => {
  console.log(`Listening on API running http://localhost:${process.env.PORT}`);
});
