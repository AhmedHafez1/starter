const Task = require('../models/Task');
const controllerWrapper = require('../middleware/controller-wrapper');
const createCustomAPIError = require('../errors/custom-api-error');

const getAllTasks = controllerWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });

  if (!task) {
    return next(createCustomAPIError('No tasks with id ' + id, 404));
  }

  res.status(200).json({ task });
});

const createTask = controllerWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ success: true, task });
});

const deleteTask = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
    return next(createCustomAPIError('No tasks with id ' + id, 404));
  }
  res.status(200).send();
});

const updateTask = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    runValidators: true,
    new: true,
  });
  if (!task) {
    return next(createCustomAPIError('No tasks with id ' + id, 404));
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
