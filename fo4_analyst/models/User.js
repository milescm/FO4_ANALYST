//몽고 DB Model & Schema..
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // trim옵션은 john ahn@naver.com이라고 쳤을 때 space를 없애고 붙여주는 역할
        unique: 1 // 이메일 겹치면 안되니까
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //일반 유저 , 관리자 유저 .. 1이면 관리자 0이면 일반유저 이런식
        type: Number,
        default: 0 //지정하지 않으면 0을 주겠다.
    },
    image: String,
    token: { //token을 이용해서 유효성을 관리할 수 있다..
        type: String
    },
    tokenExp : { //토큰의 유효기간
        type: Number
    }
})

// Model은 Schema를 감싸주는 역할이므로
// 스키마는 모델로 감싸줘야 한다. 모델의 이름을 쓰고, 스키마를 인자로 넘긴다.
const User = mongoose.model('User', userSchema)

// 이 모델을 다른 파일에서도 쓰고 싶으니까 export 해준다.
module.exports = { User }
