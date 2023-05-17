const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("Every task");
};

const getTask = (req, res) => {
  res.send("One task");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.send({ success: true, task });
};

const patchTask = (req, res) => {
  res.send("Patch task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = { getAllTasks, createTask, getTask, patchTask, deleteTask };
