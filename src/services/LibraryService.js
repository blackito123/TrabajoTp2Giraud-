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
    const { gameId, status, hoursPlayed, personalRating, review, title, description, releaseDate, genres, platform } = data;
    
    let targetGameId = gameId;

    if (!targetGameId) {
      if (!title || !releaseDate) {
        throw new Error("Game title and releaseDate are required if gameId is not provided");
      }
      const newGame = await this.gameRepo.create({
        title,
        description,
        releaseDate,
        genres,
        platforms: platform ? [platform] : []
      });
      targetGameId = newGame._id;
    }

    const game = await this.gameRepo.findById(targetGameId);
    if (!game) throw new Error("Game not found");
    
    return this.libraryRepo.create({
      user: userId,
      game: targetGameId,
      status: status || "Quiero Jugar",
      hoursPlayed,
      personalRating,
      review
    });
  }
  async updateLibraryItem(userId, id, data) {
    let item = await this.libraryRepo.findById(id);
    if (!item) {
      item = await this.libraryRepo.findByGameAndUser(id, userId);
    }
    if (!item) {
      const error = new Error("Library entry not found");
      error.statusCode = 404;
      throw error;
    }
    if (item.user.toString() !== userId.toString()) {
      const error = new Error("Not authorized to update this library item");
      error.statusCode = 403;
      throw error;
    }
    return this.libraryRepo.update(item._id, data);
  }
  async removeFromLibrary(userId, id) {
    let item = await this.libraryRepo.findById(id);
    if (!item) {
      item = await this.libraryRepo.findByGameAndUser(id, userId);
    }
    if (!item) {
      const error = new Error("Library entry not found");
      error.statusCode = 404;
      throw error;
    }
    if (item.user.toString() !== userId.toString()) {
      const error = new Error("Not authorized to remove this library item");
      error.statusCode = 403;
      throw error;
    }
    return this.libraryRepo.remove(item._id);
  }
}
export {
  LibraryService
};
