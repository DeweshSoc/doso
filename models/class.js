const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  description:{
      type: String,
      requires: true
  },
  students: [
    {
      userId: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  teachers: [
    {
      userId: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  owner:Schema.Types.ObjectId
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
