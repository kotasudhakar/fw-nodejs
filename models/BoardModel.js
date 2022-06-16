const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
  lastName: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: ['open', 'inprogress', 'closed'],
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

const Board = mongoose.model('Board', BoardSchema);
module.exports = Board;
