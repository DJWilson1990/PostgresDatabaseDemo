// setup

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// connect to database

import pg from "pg";
const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

// create endpoint

app.listen(8080, function () {
  console.log("Server is live on port 8080");
});

// create table

app.get("/make-running-table", async (req, res) => {
  const result = await db.query(`CREATE TABLE IF NOT EXISTS runners (
        runner_id SERIAL PRIMARY KEY,
        runner_name VARCHAR(255) NOT NULL,
        runner_age INT,
        runner_club VARCHAR(255)
    );`);
  res.json(result);
});
