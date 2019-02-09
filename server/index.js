const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


let app = express();
let port = 3002;



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));







app.listen(port, (error) => {
  if (error) {
    console.log(error, 'ERROR: not connected to server')
  }
  console.log(`Listening on port ${port}!`);
});





