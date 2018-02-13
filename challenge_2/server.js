const express = require('express');
const app = express();
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', (req, res) => {
  res.send('Got a post request');
});

app.listen(3000, () => console.log('App listening on port 3000!'));
