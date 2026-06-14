import { GameRepository } from "../repositories/GameRepository";
class GameService {
  constructor() {
    this.gameRepo = new GameRepository();
  }
  async getGames(page, limit) {
    const skip = (page - 1) * limit;
    return this.gameRepo.findAll({ skip, limit });
  }
  async getGameById(id) {
    const game = await this.gameRepo.findById(id);
    if (!game) throw new Error("Game not found");
    return game;
  }
  async createGame(data) {
    return this.gameRepo.create(data);
  }
  async updateGame(id, data) {
    const game = await this.gameRepo.update(id, data);
    if (!game) throw new Error("Game not found");
    return game;
  }
}
export {
  GameService
};
