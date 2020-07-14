// index.js는 backend의 시작점이다.
const express = require('express'); // express 모듈을 가져온다. ( after npm install express --save )
const app = express() // express 모듈의 메소드를 이용해서 app을 만들고
const port = 5000 //포트는 아무거나 해도 상관 없는데 5000으로 한다.
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const { auth } = require('./middleware/auth')
const { User } = require("./models/User"); // User 모델을 가져온다.

// application/x-www-form-urlencoded 데이터를 분석해서 가져올 수 있게 해주는 body-parser option임.
app.use(bodyParser.urlencoded({extended:true}));

//application/json 타입으로 된 데이터를 분석해서 가져올 수 있게 해주는 옵션
app.use(bodyParser.json());

app.use(cookieParser());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    }).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World~~sadfasdf~~!')) // 루트 디렉토리에 오면 헬로 월드 출력

//회원 가입을 위한 Route
app.post('/api/users/register', (req, res) => {
    // 회원 가입할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.


    // 가져온 User 모델로 인스턴스를 만들고..
    // 정보들을 데이터베이스에 넣기 위해서는 req.body 를 쓴다.
    // req.body는 json형식으로 돼있다.
    // body-parser를 이용했기 때문에 req.body로 클라이언트가 보내는 정보를 받아줄 수 있는 것.
    const user = new User(req.body)

    // user.save 하기 전에 bcrypt로 비밀번호 암호화를 해줘야 한다.
    // 그러기 위해서 mongoose의 기능을 이용하는데. Usermodel의 Userschema를 가져와서

    user.save((err, userInfo) => { // mongoDB method인데, req.body에 있는 정보들이 user 모델에 저장이 된다.
        if(err) return res.json({ success: false, err})
        return res.status(200).json({ // 200은 성공했다는 걸 의미한다.
            success: true
        })
    })
})

app.post('/api/users/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        user.comparePassword(req.body.password , (err, isMatch) => {
            if(!isMatch)
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);

                // 토큰 저장
                    res.cookie("x_auth", user.token)
                        .status(200)
                        .json({ loginSuccess: true, userId: user._id})
            })
        })
    })
})

app.get('/api/users/auth', auth, (req, res) => { //auth는 미들웨어임
    // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 True라는 것.
    res.status(200).json({
        _id: req.user._id, // auth.js에서 req.user = user 했기 때문에 할 수 있는 것
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image
    })
})

app.get('/api/users/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id: req.user._id},
        { token: ""}
        , (err, user) => {
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true
        })
    })
})





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) //포트 5000번에서 앱 실행함