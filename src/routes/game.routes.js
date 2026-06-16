import { Router } from "express";
import { getGames, getGameById, createGame, updateGame } from "../controllers/GameController";
import { protect, admin } from "../middlewares/auth";
const router = Router();
/**
 * @openapi
 * /games:
 *   get:
 *     summary: Obtener la lista de juegos
 *     tags: [Games]
 *     responses:
 *       200:
 *         description: Lista de juegos
 *   post:
 *     summary: Crear un nuevo juego
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               platform:
 *                 type: string
 *               genre:
 *                 type: string
 *               releaseDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Juego creado
 */
router.route("/").get(getGames).post(protect, createGame);

/**
 * @openapi
 * /games/{id}:
 *   get:
 *     summary: Obtener detalles de un juego
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalles del juego
 *   put:
 *     summary: Actualizar un juego
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               platform:
 *                 type: string
 *               genre:
 *                 type: string
 *               releaseDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Juego actualizado
 */
router.route("/:id").get(getGameById).put(protect, updateGame);
var game_routes_default = router;
export {
  game_routes_default as default
};