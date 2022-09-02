const Conversation = require('../../models/conversation');

module.exports = {
  newConversation,
}

async function newConversation(req, res) {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId]
    
  });
  
  try{
    const savedConversation = await newConversation.save();
    
    res.status(200).json(savedConversation)
  }catch(err) {
    res.status(500).json(err)
  }
}