const express = require('express');
const cors = require("cors");

const travelRoutes = require('./travelRoutes');
require("dotenv").config();

const app = express();
const database = require("./database");


app.use(express.json());
app.use(cors());
app.use("/api",travelRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("APP is listening")
})