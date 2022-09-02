const express = require('express');
const router = express.Router();
const MessageCtrl = require("../../controllers/api/messages");
const ensureLoggedIn = require('../../config/ensureLoggedIn')


//add
router.post("/", MessageCtrl.newMessage);


//get
router.get("/:conversationId", MessageCtrl.getMessage);

module.exports = router;