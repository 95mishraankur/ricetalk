const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/connect');
const User = require('./db/scema');

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./db/route'));

const PORT = process.env.PORT;




// app.get('/', (req, res) => {
//     res.send(`Hello world from the server app.js`);
// }
app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})