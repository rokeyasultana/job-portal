const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Job portal')
})

app.listen(port, () => {
  console.log(`job portal listening on port ${port}`)
})