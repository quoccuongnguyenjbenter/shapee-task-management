const express = require('express');

const router = express.Router();

var controller = require('../controllers/task.controller');

// var router = express.Router();1

// router.get('/', controller.index);
// router.post('/', controller.create);
router.get('/', controller.index);
router.get('/:_id', controller.detail);



// module.exports = router;

module.exports = router; 