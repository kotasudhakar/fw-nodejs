const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
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
const User = mongoose.model('User', UserSchema);

module.exports = User;

//   user: {
//     type: mongoose.SchemaTypes.ObjectId,
//     required: true,
//   },
//   type: {
//     type: String,
//     enum: [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL],
//     required: true,
//   },
//   expires: {
//     type: Date,
//     required: true,
//   },
//   blacklisted: {
//     type: Boolean,
//     default: false,
//   },
// },
// {
//   timestamps: true,
// }
