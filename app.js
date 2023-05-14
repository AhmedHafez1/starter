const tasks = require('./routes/tasks');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./public'));
app.use('/api/v1/tasks', tasks);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
