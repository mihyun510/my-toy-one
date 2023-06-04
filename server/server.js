const express = require('express');
const app = express();

const path = require('path');
const dotenv = require('dotenv');

const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용
const cors = require('cors');

// lib config
dotenv.config();

//process.env는 nodeJS에서 환경 변수를 가져올 때 사용됩니다. 환경 변수가 입력되지 않을 시 port에 8080번을 지정
const port = process.env.SERVER_PORT || 8080;

var connection = mysql.createConnection({
    host: process.env.DATABASE_SPRINT_HOST,
    user: process.env.DATABASE_SPRINT_USERNAME,
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: process.env.DATABASE_SPRINT_DATABASE,
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.json());

app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))

con.connect((err) => {
    if(err) {
        console.error('mysql connection error : ' + err); 
        //throw err;
    } else {
        console.log('mysql is connected successfully!');
    }
});


//const test = require('.//Router/router');
//app.use('/', test);

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

