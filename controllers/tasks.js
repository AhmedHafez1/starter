const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });

    if (!task) {
      return res.status(404).json({ msg: 'No tasks with id ' + id });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const patchTask = (req, res) => {
  res.send('Patch task');
};

const deleteTask = (req, res) => {
  res.send('Delete task');
};

module.exports = { getAllTasks, createTask, getTask, patchTask, deleteTask };
