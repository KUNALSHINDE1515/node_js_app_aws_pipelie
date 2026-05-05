import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;
// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.get("/kunal", (req: Request, res: Response) => {
  return res.send("HI Kunal Your Frist ci cd code is working fine please push the code on github and check the it working or not");
});


app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


