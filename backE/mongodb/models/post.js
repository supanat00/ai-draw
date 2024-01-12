import mongoose from "mongoose";

const Post = new mongoose.Schema({
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

const PostSchema = mongoose.model("Poster", Post);

export default PostSchema;
