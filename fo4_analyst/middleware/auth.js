const { User } = require('../models/User');
let auth = (req, res, next) => {
    // 인증 처리를 하는 곳

    // 클라이언트 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;

    // 토큰을 decode한 후 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true}) // 유저 없음

        // 유저 있음..

        // request에 token과 user를 넣어주는 이유는
        // 라우터에서 Auth를 통해 request를 받을 때 저렇게 넣어주면 바로 쓸 수 있음
        req.token = token;
        req.user = user;
        next() // 미들웨어에서 계속 갈 수 있게..할거 했으면 다음 꺼 진행할 수 있게.
    })

}

module.exports = { auth };