const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Reference to the User model
  });

export default mongoose.model("Post", schema);
