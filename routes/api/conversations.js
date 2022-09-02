const express = require('express');
const router = express.Router();
const ConversationsCtrl = require("../../controllers/api/conversations");
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//new conversation
router.post("/", ConversationsCtrl.newConversation);


//get conversation of a user



module.exports = router;