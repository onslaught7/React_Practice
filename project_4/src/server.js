import express from 'express';
import bodyParser from "body-parser";
import axios from 'axios'
import cors from 'cors'
import pg from 'pg'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const db = new pg.Client({
    user:"postgres",
    host: "localhost",
    database: "restaurant",
    password: "Kbsboss@023098",
    port: 5432
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});