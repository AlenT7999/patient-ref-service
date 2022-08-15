import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routers/routes";
// import { json, urlencoded }
dotenv.config({ path: ".env" });
const app: Express = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use("/api/v1", routes);
app.get("*", (req: Request, res: Response) => {
  res.status(404).send({ message: "unauthorized", status: "false" });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

export default app;