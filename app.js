/**
 * * 24.06.30 (Sun) 정호연
 * * 파라미터 테스트
 */
const express = require('express');
const app = express();
const port = 3000;

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  res.send(`USER ID : ${userId}`);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
