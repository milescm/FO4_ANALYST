const express = require("express");
const asyncify = require('express-asyncify');
const router = asyncify(express.Router());
const axios = require("axios");
const key = require("../config/key").key;
const baseURL = "https://api.nexon.co.kr/fifaonline4/v1.0"




router.get("/userName=search?:managerName",  async (req, res) => {
    const managerName = encodeURI(req.query.managerName);
    const managerInfo = [];
    await axios.get(`${baseURL}/users?nickname=${managerName}`, {
        headers: {
            'Authorization': key
        }
    }).then((res) => {
        managerInfo.push(res.data);
    }).catch((err) => res.json({ err }));

    const {
        accessId,
        nickname,
        level
    } = managerInfo[0];

    res.json({
        accessId,
        nickname,
        level
    });
});

// BaseURL + "/fifaonline4/v1.0/users/" + AccessID + "/maxdivision",
router.get("/searchTier?:accessId",  async (req, res) => {
    const managerAccessId = req.query.accessId
    const Tier = [];
    await axios.get(`${baseURL}/users/${managerAccessId}/maxdivision`, {
        headers: {
            'Authorization': key
        }
    }).then((res) => {
        Tier.push(res.data);
    }).catch((err) => res.json({ err }));

    console.log(Tier)

    // const {
    //     accessId,
    //     nickname,
    //     level
    // } = managerInfo[0];
    //
    // res.json({
    //     accessId,
    //     nickname,
    //     level
    // });
});


module.exports = router;