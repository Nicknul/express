const express = require('express');
// console.log(express);
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
