const mongoose = require('mongoose');
const { Schema } = mongoose;

// 1. Create Mongoose schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: String,
      required: true
    },
    company: {
      type: String
    },
    message: {
      type: String
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

// 2. Create model
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
