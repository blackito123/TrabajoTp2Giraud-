import { UserGame } from "../models/UserGame";
class LibraryRepository {
  async findByUser(userId) {
    return UserGame.find({ user: userId }).populate("game");
  }
  async create(libraryData) {
    return UserGame.create(libraryData);
  }
  async findById(id) {
    return UserGame.findById(id);
  }
  async update(id, updateData) {
    return UserGame.findByIdAndUpdate(id, updateData, { new: true });
  }
  async remove(id) {
    return UserGame.findByIdAndDelete(id);
  }
  async getUserStats(userId) {
    return UserGame.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
          totalHours: { $sum: "$hoursPlayed" }
        }
      }
    ]);
  }
}
export {
  LibraryRepository
};
