const express = require('express')
const app = express()
app.get('/api', function (req, res) {
  return res.json({'code': '000'})
})
app.listen(3001)