import express, {Express, Request, Response } from "express"
import dotenv from 'dotenv';
import { connectToDatabase } from './db/connect'; 

dotenv.config();

const app = express();
const port = process.env.PORT

async function main() {
    const database = await connectToDatabase();
  
  }
  
  main().catch(console.error);

app.get ('/', (req, res) => {
    res.send ('Express + Typescript server')
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
