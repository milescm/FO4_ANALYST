// index.js는 backend의 시작점이다.
const express = require('express') // express 모듈을 가져온다. ( after npm install express --save )
const app = express() // express 모듈의 메소드를 이용해서 app을 만들고
const port = 5000 //포트는 아무거나 해도 상관 없는데 5000으로 한다.

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://taewankim:abcd1234@fo4analyst.j9g6e.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    }).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World~~~~!')) // 루트 디렉토리에 오면 헬로 월드 출력

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) //포트 5000번에서 앱 실행함