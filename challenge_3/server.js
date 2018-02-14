const express = require('express');
const app = express();
app.use(express.static('client'));

app.get('/', (req, res) => res.send('Connect Four React'));

app.listen(3000, () => console.log('Connect Four React App listening on port 3000!'));
