//node_modules에서 express라는 모듈을 활용한다.
const express = require('express');

//app이라는 변수로 REST End Point들을 생성
const app = express();

/*
process.env는 nodeJS에서 환경 변수를 가져올 때 사용됩니다. 환경 변수가 입력되지 않을 시 
port에 8080번을 지정
*/
const port = process.env.PORT || 8080;

//GET 리퀘스트를 정의
app.get('/', (req, res) => {
    //응답받으면..
    res.json({
        success: true,
    });
});

//express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다.
app.listen(port, () => {
    console.log(`server is listening at localhost:${process.env.PORT}`);
});