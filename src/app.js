const mongoose = require("mongoose");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/thapatechical");
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

// a mongoose model is a wrapper on the mongoose schema .
// a mongoosae schema defines the structure of the documents
// default value ,validation etc wheras a mogoose module
// provide an interface to the databse for creating ,querying ,delteing records
// throgh this mongoose model you can create CRUD operation

// model ka create karna means collectionn ko create karan hota hai mean you can create tables
// collection creation

// this is mogoose model is a class throght which we can make many document mean  row in sql
const Playlist = new mongoose.model("Playlist", playlistSchema);

//  creation of collection name , schema name what poperrty you want

// always singlura           , in your collection

// insert /create

const createDocment = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "React js",
      ctype: "Fronted",
      video: 80,
      author: "ujjwal kumar",
      active: true,
    });
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
createDocment();
