const express = require('express');
const router  = express.Router();

const userController = require('../controllers/users.controller');

router.get('/create', userController.create);
router.post('/create', userController.doCreate);

module.exports = router;