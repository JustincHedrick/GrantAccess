// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Conversation = require('./models/conversations');
const Message = require('./models/messages')
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order, Conversation, Message;
let users, items, categories, orders;