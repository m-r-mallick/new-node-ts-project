import { config } from "dotenv";
import express, { Application, Request, Response } from "express";
const app: Application = express();
config();

app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "HAPPY CODING" });
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on PORT:${port}`));
