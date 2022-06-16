const express = require('express');
const { default: mongoose } = require('mongoose');

const app = express();

mongoose.connect;
app.listen(3000, () => {
  console.log('Server started on ');
});
