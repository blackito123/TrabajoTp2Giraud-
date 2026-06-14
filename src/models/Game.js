import mongoose from "mongoose";
const gameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    platforms: [{ type: String }],
    genres: [{ type: String }],
    releaseDate: { type: Date, required: true },
    coverImage: { type: String },
    description: { type: String },
    developer: { type: String },
    multiplayer: { type: Boolean, default: false }
  },
  { timestamps: true }
);
const Game = mongoose.model("Game", gameSchema);
export {
  Game
};
