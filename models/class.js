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
  description: {
    type: String,
    required: true,
  },
  students: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      joinedOn: { type: Date, default: Date.now },
    },
  ],
  teachers: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      joinedOn: { type: Date, default: Date.now },
    },
  ],
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
