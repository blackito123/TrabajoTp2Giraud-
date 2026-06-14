import { LibraryRepository } from "../repositories/LibraryRepository";
import mongoose from "mongoose";
class StatsService {
  constructor() {
    this.libraryRepo = new LibraryRepository();
  }
  async getUserStats(userId) {
    const stats = await this.libraryRepo.getUserStats(new mongoose.Types.ObjectId(userId));
    return stats;
  }
}
export {
  StatsService
};
