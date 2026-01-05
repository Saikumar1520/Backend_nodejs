const express = require('express');
const connectDB = require('./connect');
const urlRoute = require('./routes/url');

const app = express();
const PORT = 8000;

connectDB();
app.use(express.json());


// mount router at /url
app.use('/url', urlRoute);

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
