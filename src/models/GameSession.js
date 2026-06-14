import mongoose from "mongoose";
const gameSessionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    game: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    date: { type: Date, required: true },
    time: { type: String, required: true },
    platform: { type: String },
    status: {
      type: String,
      enum: ["Scheduled", "In Progress", "Finished", "Cancelled"],
      default: "Scheduled"
    },
    description: { type: String },
    maxPlayers: { type: Number, default: 4 }
  },
  { timestamps: true }
);
const GameSession = mongoose.model("GameSession", gameSessionSchema);
export {
  GameSession
};
