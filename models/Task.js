const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [25, 'Name can not be more than 25 chars'],
    trim: true,
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);
