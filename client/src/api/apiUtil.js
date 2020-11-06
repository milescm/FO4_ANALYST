import axios from "axios";

export default axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "http://localhost:5000", // 나중에 heroku같은 걸로 배포하게 되면 production일 시에 그 쪽 url로
});