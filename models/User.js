const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      lowercase: true,
      require: true,
    },

    mobile: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "nurse", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
