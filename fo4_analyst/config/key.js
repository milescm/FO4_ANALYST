// 환경 변수를 이용해서 로컬 개발 환경인지 아니면 배포 이후의 단계인지를 알 수 있다.
// 로컬 개발 환경이라면 dev.js의 key를
// 배포 이후 환경이라면 prod.js의 key를 사용한다.

if (process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
}else {
    module.exports = require('./dev');
}