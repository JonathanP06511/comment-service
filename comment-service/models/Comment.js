const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  comment: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
