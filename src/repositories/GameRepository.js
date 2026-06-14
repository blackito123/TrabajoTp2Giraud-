import { Game } from "../models/Game";
class GameRepository {
  async findAll({ skip, limit }) {
    const games = await Game.find().skip(skip).limit(limit);
    const total = await Game.countDocuments();
    return { games, total };
  }
  async findById(id) {
    return Game.findById(id);
  }
  async create(gameData) {
    return Game.create(gameData);
  }
  async update(id, gameData) {
    return Game.findByIdAndUpdate(id, gameData, { new: true });
  }
}
export {
  GameRepository
};
