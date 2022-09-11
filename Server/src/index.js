const express = require("express");
require('./db/mongoose');
require('dotenv').config();
const router = require("./routers/router");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})