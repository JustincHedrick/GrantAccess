const express = require('express');
const router = express.Router();
const grantsCtrl = require('../../controllers/api/grants');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//GET
router.get('/', grantsCtrl.getGrants);

module.exports = router;