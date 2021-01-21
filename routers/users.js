const express = require('express');
const router = express.Router();
const handler = require('../handlers/users');



router.get('/users',handler.getUsers);
router.post('/users',handler.addUsers);

module.exports = router;