import { Router } from "express";
import { getGames, getGameById, createGame, updateGame } from "../controllers/GameController";
import { protect, admin } from "../middlewares/auth";
const router = Router();
router.route("/").get(getGames).post(protect, admin, createGame);
router.route("/:id").get(getGameById).put(protect, admin, updateGame);
var game_routes_default = router;
export {
  game_routes_default as default
};
