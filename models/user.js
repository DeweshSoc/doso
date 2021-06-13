const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  enrolledClasses: [
    {
      classId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Class",
      },
      enrolledOn: Date
    },
  ],
  classes: [
    {
      classId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Class",
      },
      createdOn: Date,
      owner: Boolean
    },
  ],
});


const User = mongoose.model("User",userSchema);

module.exports = User;