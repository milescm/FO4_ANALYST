// prod.js 는 production 환경에서 쓰는 것임.

module.exports = {
    mongoURI: process.env.MONGO_URI //heroku config vars랑 똑같은 key여야 함.
}