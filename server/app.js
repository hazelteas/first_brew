const express = require('express')
const app = express()
const port = 3000
const router = require("./routers");
const cors = require("cors")

app.use(express.json());
app.use(cors())
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})