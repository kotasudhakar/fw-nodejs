const mongoose = require('mongoose');
const CardSchema = mongoose.Schema({
  boardId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Board',
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },

  status: {
    type: String,
    enum: ['open', 'inprogress', 'closed'],
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Super High'],
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  assignedTo: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;
