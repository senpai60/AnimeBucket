import mongoose from "mongoose";

const bucketSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  animeList: { type: [String], required: true, default: [] },
});
