const express = require('express');
const cors = require('cors');
require('dotenv').config();
const todoRoutes = require('./routes/todo');
// Running express server
const app = express();
const port = process.env.PORT || 8000;

// route middlewares
app.use(cors());
app.use(todoRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
