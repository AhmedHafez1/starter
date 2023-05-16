const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://Ahmed:123@freecluster.ek4ijog.mongodb.net/task_manager?retryWrites=true&w=majority';

mongoose
  .connect(connectionString)
  .then(() => console.log('Db Connected Successfully'))
  .catch((ereor) => console.log(ereor));
