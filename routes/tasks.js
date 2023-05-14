const express = require('express');
const { getAllTasks } = require('../controllers/tasks');
const router = express.Router();

router.get('/', getAllTasks);

module.exports = router;
