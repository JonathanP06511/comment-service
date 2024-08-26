const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
  const { email, comment } = req.body;

  if (!email || !comment) {
    return res.status(400).json({ message: 'Email and comment are required' });
  }

  try {
    const newComment = new Comment({ email, comment });
    await newComment.save();
    
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
