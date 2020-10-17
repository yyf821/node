const express = require('express')
const app = express()
const port = 3000

// cors 模块用来解决跨域问题
const cors = require('cors')
const User = require("./models/User");
const bodyParser = require('body-parser')

// 配置静态文件目录
app.use(express.static('static'))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  // User.insertMany([
  //   { email: 'aaa', password: '111111', name: 'aaa' },
  //   { email: 'bbb', password: '111111', name: 'bbb' }
  // ])
  User.find().then((users) => {
    res.status(200).send(users);
  })
})

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})