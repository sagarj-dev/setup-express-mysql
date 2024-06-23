import "reflect-metadata";
import dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";

import { errorHandler, notFound } from "./middleware/errorMiddleware";

import authRoute from "./routes/authRoute";
import database from "./database/database";
import { Users } from "./database/models/Users.entity";

const app: Express = express();
app.use(express.static("static"));
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/api/test", async (req, res) => {
  const users = database.getRepository(Users);
  console.log(" ===>", users);
  res.send(await users.find());
});

app.use("/api/user", authRoute);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await database.initialize();
    console.log("Database connected ===>");

    app.listen(PORT, () => {
      console.log("Server listen to port " + PORT);
    });
  } catch (error) {
    console.log("error ===>", error);
  }
})();
