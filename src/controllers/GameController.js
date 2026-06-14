import { GameService } from "../services/GameService";
const gameService = new GameService();
const getGames = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const data = await gameService.getGames(page, limit);
    res.json(data);
  } catch (error) {
    next(error);
  }
};
const getGameById = async (req, res, next) => {
  try {
    const game = await gameService.getGameById(req.params.id);
    res.json(game);
  } catch (error) {
    next(error);
  }
};
const createGame = async (req, res, next) => {
  try {
    const game = await gameService.createGame(req.body);
    res.status(201).json(game);
  } catch (error) {
    next(error);
  }
};
const updateGame = async (req, res, next) => {
  try {
    const game = await gameService.updateGame(req.params.id, req.body);
    res.json(game);
  } catch (error) {
    next(error);
  }
};
export {
  createGame,
  getGameById,
  getGames,
  updateGame
};
