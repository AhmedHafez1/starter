const express = require('express');
const {
  getAllTasks,
  createTask,
  deleteTask,
  getTask,
  patchTask,
} = require('../controllers/tasks');

const router = express.Router();

router.get('/', getAllTasks);
router.post('/', createTask);
router.route('/:id').get(getTask).patch(patchTask).delete(deleteTask);

module.exports = router;
