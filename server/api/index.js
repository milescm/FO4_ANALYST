const express = require("express");
const router = express.Router();
const axios = require("axios");
const key = require("../config/key");

router.get("/userName=search?:managerName",  async (req, res) => {
    // res.send("response")
    const managerName = encodeURI(req.query.managerName);
    const mangerInfo = [];

    await axios.get(`https://api.nexon.co.kr/fifaonline4/v1.0/users?nickname=${managerName}`, {
        headers: {
            'Authorization': key
        }
    }).then((res) => {
        mangerInfo.push(res.data);
    }).catch((err) => res.json({ err }));

    res.json(managerInfo)

});


module.exports = router;