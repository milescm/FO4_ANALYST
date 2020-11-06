const express = require("express");
const asyncify = require('express-asyncify');
const router = asyncify(express.Router());
const axios = require("axios");

const key = require("../config/key").key;
// const key2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNDUzMTE4OTMyIiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExNDgxIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjIwMDAwOjEwIiwibmJmIjoxNTc3NjIwMDY0LCJleHAiOjE2NDA2OTIwNjQsImlhdCI6MTU3NzYyMDA2NH0.llBkb0hZnFwUy_5LGcTmQc2HQGC-bIpY_5f8Lralqng"

// console.log(key1.key)
// console.log(key2)

router.get("/userName=search?:managerName",  async (req, res) => { //todo: 연결은 잘 됐는데,,
    const managerName = encodeURI(req.query.managerName);
    const userInfo = await axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${managerName}`, {
        headers: {
            'Authorization': key
        }
    })
    console.log(userInfo)
});


module.exports = router;