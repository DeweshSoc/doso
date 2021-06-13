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
      enrolledOn: {type:Date,default:Date.now}
    },
  ],
  classes: [
    {
      classId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Class",
      },
      createdOn: {type:Date,default:Date.now},
      owner: {type:Boolean,default:true}
    },
  ],
});


const User = mongoose.model("User",userSchema);

module.exports = User;