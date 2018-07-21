const express = require('express');
const router  = express.Router();

const sessionController = require('../controllers/sessions.controller');

router.get('/create', sessionController.create);

module.exports = router;