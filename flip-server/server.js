const express = require('express');
const morgan = require('morgan');

// init express and morgan
const app = express();
app.use(morgan("dev"));

// code here!

// start the server
app.listen(3001, ()=>{console.log(`Server started at http://localhost:${PORT}/`)});