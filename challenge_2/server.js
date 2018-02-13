const express = require('express');
const app = express();

//connect to client
//app.use(express.static('client'));

app.get('/', (req, res) => {
  res.send('GET REQUEST')
});

app.post('/', (req, res) => {
  // store data in body array
  let body = [];

  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // body is a string: {"firstName":"Nicolas","lastName":"Peyrichou","county":"CA","city":"SF","role":"marketing","sales":"5000"}
    res.send(body);
  });

});

app.listen(3000, () => console.log('App listening on port 3000!'));
