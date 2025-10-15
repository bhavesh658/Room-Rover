const express = require('express')
const port = 6000;
const mongoDB = reqiure('./db.js');
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})