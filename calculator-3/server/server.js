const express = reqire("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.listen(5500, () => {console.log("Server is running")});

