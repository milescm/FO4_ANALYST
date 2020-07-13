// index.js는 backend의 시작점이다.
const express = require('express') // express 모듈을 가져온다. ( after npm install express --save )
const app = express() // express 모듈의 메소드를 이용해서 app을 만들고
const port = 5000 //포트는 아무거나 해도 상관 없는데 5000으로 한다.
const bodyParser = require('body-parser')


const config = require('./config/key');


const { User } = require("./models/User"); // User 모델을 가져온다.

// application/x-www-form-urlencoded 데이터를 분석해서 가져올 수 있게 해주는 body-parser option임.
app.use(bodyParser.urlencoded({extended:true}));

//application/json 타입으로 된 데이터를 분석해서 가져올 수 있게 해주는 옵션
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    }).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World~~sadfasdf~~!')) // 루트 디렉토리에 오면 헬로 월드 출력

//회원 가입을 위한 Route
app.post('/register', (req, res) => {
    // 회원 가입할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터베이스에 넣어준다.


    // 가져온 User 모델로 인스턴스를 만들고..
    // 정보들을 데이터베이스에 넣기 위해서는 req.body 를 쓴다.
    // req.body는 json형식으로 돼있다.
    // body-parser를 이용했기 때문에 req.body로 클라이언트가 보내는 정보를 받아줄 수 있는 것.
    const user = new User(req.body)

    user.save((err, userInfo) => { // mongoDB method인데, req.body에 있는 정보들이 user 모델에 저장이 된다.
        if(err) return res.json({ success: false, err})
        return res.status(200).json({ // 200은 성공했다는 걸 의미한다.
            success: true
        })
    })
})




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) //포트 5000번에서 앱 실행함