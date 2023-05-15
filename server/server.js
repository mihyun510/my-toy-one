const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
// lib config
dotenv.config();
//process.env는 nodeJS에서 환경 변수를 가져올 때 사용됩니다. 환경 변수가 입력되지 않을 시 port에 8080번을 지정
const port = process.env.SERVER_PORT || 8080;

const test = require('.//Router/router');
app.use('/', test);

// CORS 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());

// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('/', (res, req) => {
//     req.sendFile(path.join(__dirname, '../client/build/index.html'));
//   });
  
//   app.get('*', (res, req) => {
//     req.sendFile(path.join(__dirname, '../client/build/index.html'));
//   });

//express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다.
app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.SERVER_PORT}`);
});

