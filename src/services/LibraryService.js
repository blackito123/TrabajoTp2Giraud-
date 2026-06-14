import { LibraryRepository } from "../repositories/LibraryRepository";
import { GameRepository } from "../repositories/GameRepository";
class LibraryService {
  constructor() {
    this.libraryRepo = new LibraryRepository();
    this.gameRepo = new GameRepository();
  }
  async getMyLibrary(userId) {
    return this.libraryRepo.findByUser(userId);
  }
  async addToLibrary(userId, data) {
    const { gameId, status, hoursPlayed, personalRating, review } = data;
    const game = await this.gameRepo.findById(gameId);
    if (!game) throw new Error("Game not found");
    return this.libraryRepo.create({
      user: userId,
      game: gameId,
      status,
      hoursPlayed,
      personalRating,
      review
    });
  }
  async updateLibraryItem(userId, id, data) {
    const item = await this.libraryRepo.findById(id);
    if (!item) throw new Error("Library entry not found");
    if (item.user.toString() !== userId) {
      throw new Error("Not authorized to update this library item");
    }
    return this.libraryRepo.update(id, data);
  }
  async removeFromLibrary(userId, id) {
    const item = await this.libraryRepo.findById(id);
    if (!item) throw new Error("Library entry not found");
    if (item.user.toString() !== userId) {
      throw new Error("Not authorized to remove this library item");
    }
    return this.libraryRepo.remove(id);
  }
}
export {
  LibraryService
};
