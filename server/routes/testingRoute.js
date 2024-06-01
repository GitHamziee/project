const express = require('express');
const testingController = require('../controllers/testingController');

const router = express.Router();

router.post('/', testingController.testing);

module.exports = router;
