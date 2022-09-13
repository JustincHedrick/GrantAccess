const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// const SALT_ROUNDS = 6;
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// GET /API/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

router.post('/update', usersCtrl.update);

router.get('/', usersCtrl.getProfile);

router.get('/:userid', usersCtrl.getUser);

router.get('/', usersCtrl.getGuides)

module.exports = router;