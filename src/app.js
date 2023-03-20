const mongoose = require("mongoose");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ttchannel");
  console.log("connection succesfull");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main();

// schema
// a mangooose schema define the structure of the documents

// default valure, validation

const playlistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  video: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});
