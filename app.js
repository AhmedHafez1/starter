const tasks = require('./routes/tasks');
const express = require('express');
const connectDB = require('./db/connection');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
