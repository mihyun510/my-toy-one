//node_modules에서 express라는 모듈을 활용한다.
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ test: "hi"});
});



module.exports = router;
