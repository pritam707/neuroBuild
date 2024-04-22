const express = require('express')
const cors = require("cors");
const path = require("path");
require('dotenv').config()

const { mongoDB } = require("./db")
const route = require('./route')

const app = express()
const port = 5000 || process.env.port


var corsOptions = {
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type", "User"],
    optionsSuccessStatus: 200,
};

app.set("views", path.join(__dirname, "mail_templates"));
app.set("view engine", "ejs");
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));
mongoDB()
app.use('/', route)


app.listen(port, () => {
    console.log("App is running..." + "\nPort: " + port)
})