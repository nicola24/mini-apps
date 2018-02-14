// ***SERVER***
const express = require('express');
const fs = require('fs');
const app = express();
//connect to client
app.use(express.static('client'));

// ***POST***
app.post('/', (req, res) => {
  console.log('server');
  let body = [];
  let tempArr = [];
  let result = '';
  // processing chunk of data and make it an object
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    // typeof body === object
    body = Buffer.concat(body).toString();
    body = JSON.parse(body);
    // loop thru body and return the key/value in an array
    for (var key in body) {
      tempArr.push(body[key]);
    }
    // make it a string CSV format
    result = tempArr.join();
    // response to the server is a string
    res.send(result);
    console.log(result);
  });
});

app.listen(3000, () => console.log('App listening on port 3000!'));

// ***HELPER FUNCTION***
