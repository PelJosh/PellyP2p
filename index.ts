import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./db/connect";
// import authcontroller from "./src/controllers/authcontroller";
import user from "./src/models/users";
import {createUser, getAllUser, getUser, updateUser, deleteUser }  from "./src/controllers/usercontroller";
import morgan from "morgan";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(morgan("dev"));

app.use((req: any, res: any, next: any) => {
  req.requestTime = new Date().toISOString();
  next();
});

async function main() {
  const database = await connectToDatabase();
}

main().catch(console.error);

app.get("/api/v1/", (req, res) => {
  res.send("Express + Typescript server");
});


app
.route("/api/v1/user")
.post(createUser)
.get(getAllUser);


app
.route('/api/v1/user/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
