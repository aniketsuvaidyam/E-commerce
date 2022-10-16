import express from "express";
import dotenv from 'dotenv';
const app = express();
import Connection from "./dataBase/db.js";
const PORT = 5000
dotenv.config()

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password)

app.listen(PORT, () => console.log(`server is runing sucessful PORT ${PORT}`))