const express = require('express');
var router = express.Router();
const controller = require('../controllers/task.controller');
const add=require('../controllers/addTask.controller.js')
// const router = express.Router();

// router.get('/', controller.index);
// router.get('/', controller.index);
// router.get('/:id', controller.detail);
// router.get('/search/query', controller.search);
// router.get('/filter/status', controller.filter);
router.post('/addTask',add.addTask)

module.exports = router;
