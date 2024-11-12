import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  audioFile: String, // You can store the file path or binary data if MongoDB supports it
  imageFile: String, // Same for image
  duration : String
},{ timestamps: true });

const Song = mongoose.model("Song", songSchema);

export default Song;
