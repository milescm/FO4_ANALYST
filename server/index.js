const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
app.use(cors())  // cors(*)


// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false })); // application/x-www-form-urlencoded
// app.use(bodyParser.json()); // application/json

const managerRoute = require("./api/index");
app.use("/manager", managerRoute)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})