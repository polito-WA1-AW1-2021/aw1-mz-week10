const express = require('express');
const morgan = require('morgan');
const flip = require('flip-text');

// init express and morgan
const app = express();
app.use(morgan("dev"));

app.get('/api/flip', (req, res) => {   
  const text = req.query.text ;   
  const flipped = flip(text) ;   
  res.json({text: flipped}) ;
});

// start the server
app.listen(3001, ()=>{console.log(`Server started at http://localhost:3001/`)});