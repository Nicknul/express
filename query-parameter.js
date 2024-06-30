/**
 * * 24.06.30 (Sun) 정호연
 * * query parameter test
 */
const express = require('express');
const app = express();
const port = 3000;

// 쿼리 파라미터를 사용한 예제
app.get('/search', (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
