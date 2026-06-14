import mongoose from "mongoose";
const userGameSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    game: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
    status: {
      type: String,
      enum: ["Backlog", "Playing", "Completed", "Abandoned", "Want to Play"],
      required: true
    },
    hoursPlayed: { type: Number, default: 0 },
    personalRating: { type: Number, min: 1, max: 10 },
    review: { type: String },
    dateAdded: { type: Date, default: Date.now }
  },
  { timestamps: true }
);
const UserGame = mongoose.model("UserGame", userGameSchema);
export {
  UserGame
};
