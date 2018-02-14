// ***SERVER***
const express = require('express');
const fs = require('fs');
const app = express();
//connect to client
//app.use(express.static('client'));

// ***POST***
app.post('/', (req, res) => {
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
    // response to the server is a string, ie: Nicolas,Peyrichou,CA,SF,marketing,5000
    res.send(result);
  });
});

app.listen(3000, () => console.log('App listening on port 3000!'));


// ***HELPER FUNCTION***

// reads the contents of a sales_report.json file, convert its content into a string
// convert it in an array of object index and flatten it.

// let readJSONFile = (url) => {
//   fs.readFile(url, (err, data) => {
//     // if err throw error
//     if (err) {
//       throw err;
//     }
//     let body = [];
//     body.push(data);
//     body = Buffer.concat(body).toString();
//     console.log(typeof body);
//   });
// };
//
// readJSONFile('./samples/sales_report.json');
