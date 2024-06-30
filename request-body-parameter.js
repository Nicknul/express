/**
 * * 24.06.30 (Sun) 정호연
 * * 요청 본문 파라미터 테스트
 */
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// HTML form
app.get('/', (req, res) => {
  let data = fs.readFileSync('./index.html', 'utf-8');
  res.send(data);
});

// body-parser 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST 요청 처리 예제
app.post('/user', (req, res) => {
  const name = req.body.name; // 요청 본문에서 name을 가져옴
  const age = req.body.age; // 요청 본문에서 age를 가져옴
  res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// 클라이언트에서 POST 요청을 보내는 예제
fetch('http://localhost:3000/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John',
    age: 30,
  }),
})
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
