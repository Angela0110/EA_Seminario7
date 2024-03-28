const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String },
  completed: { type: Boolean, default: false }
});

export default mongoose.model("Todo", TodoSchema);