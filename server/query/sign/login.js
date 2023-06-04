
const express = require('express');
const app = express();

app.post("/api/login", (req,res)=>{

    // console.log(req.body);
    connection.query("SELECT US_NM FROM TB_USER ",
    function(err,rows,fields){
        if(err){
            console.log("불러오기 실패");
        }else{
            console.log("불러오기 성공");
            res.send(rows[0]);
        }
    })
});

