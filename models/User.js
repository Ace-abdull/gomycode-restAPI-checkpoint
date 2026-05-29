const mongoose = require("mongoose");

// Define the structure of a user document in MongoDB.
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    age: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Export the User model so it can be used in server.js.
module.exports = mongoose.model("User", userSchema);
