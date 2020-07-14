//몽고 DB Model & Schema..
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// bcrypt 문서를 보면 salt를 생성하고 생성된 salt를 이용해서 비밀번호를 암호화 시킴.
const saltRounds = 10 // salt가 몇 글자인지를 나타낸다.
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // trim옵션은 john ahn@naver.com이라고 쳤을 때 space를 없애고 붙여주는 역할
        unique: true // 이메일 겹치면 안되니까
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
});

// mongoose 메소드인데, 유저 모델의 유저 정보를 저장하기 전.. user.save()전에 무엇을 한다는 건데, 그 무엇은 function이라는 거
userSchema.pre('save', function( next ){ //next param은 할 거 다하고 끝나면 next()를 통해서 user.save()로 보내는 거임.
    var user = this; // 스키마를 나타낸다.
    // 비밀번호를 암호화 한다.

    if (user.isModified('password')) { //비밀번호 관련해서만 암호화
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash // plainPassword를 hash로 교체
                next()
            })
        })
    } else { // 비밀번호 관련 아니면
        next()
    }
})

// User 모델에서 메소드 만듦
userSchema.methods.comparePassword = function(plainPassword, cb) {
    console.log("plainPassword :", plainPassword);
    //plainPassword 1234567 , 암호화된 비밀번호 230p4eiwo가 같은지 체크하려면 plain도 암호화 한 후에 비교해야한다.
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err);
        cb(null, isMatch) //no error, true
    })
}

userSchema.methods.generateToken = function(cb) {
    // jsonwebtoken (jwt) 를 이용해서 token 생성
    var user = this;
    console.log("generate token");
    var token = jwt.sign(user._id.toHexString(), 'secretToken') // token 생성
    // user._id + 'secretToken' = token
    // -> 'secretToken' -> user._id (decode) --> DB에서 조회
    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    // 토큰을 decode 한다.
    jwt.verify(token, 'secretToken', function(err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾은 다음에
        // 클라이언트에서 가져온 token과 db에 보관된 토큰이 일치하는지 확인

        user.findOne({"_id": decoded, "token": token}, function(err, user) {
            if(err) return cb(err);
            cb(null, user)
        })
    })
}


// Model은 Schema를 감싸주는 역할이므로
// 스키마는 모델로 감싸줘야 한다. 모델의 이름을 쓰고, 스키마를 인자로 넘긴다.
const User = mongoose.model('User', userSchema)

// 이 모델을 다른 파일에서도 쓰고 싶으니까 export 해준다.
module.exports = { User }
