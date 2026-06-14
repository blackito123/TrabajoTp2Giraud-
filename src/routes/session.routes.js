import { Router } from "express";
import { getSessions, createSession, getSessionById, updateSession, joinSession } from "../controllers/SessionController";
import { protect } from "../middlewares/auth";
const router = Router();
/**
 * @openapi
 * /sessions:
 *   get:
 *     summary: Obtener todas las sesiones de juego activas
 *     tags: [Sessions]
 *     responses:
 *       200:
 *         description: Lista de sesiones
 *   post:
 *     summary: Crear una nueva sesión
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               gameId:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               maxPlayers:
 *                 type: number
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sesión creada
 */
router.route("/").get(getSessions).post(protect, createSession);

/**
 * @openapi
 * /sessions/{id}:
 *   get:
 *     summary: Obtener detalles de una sesión
 *     tags: [Sessions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalles de la sesión
 *   put:
 *     summary: Actualizar una sesión
 *     tags: [Sessions]
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
 *               endTime:
 *                 type: string
 *                 format: date-time
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sesión actualizada
 */
router.route("/:id").get(getSessionById).put(protect, updateSession);

/**
 * @openapi
 * /sessions/{id}/join:
 *   post:
 *     summary: Unirse a una sesión
 *     tags: [Sessions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Unido a la sesión
 */
router.route("/:id/join").post(protect, joinSession);
var session_routes_default = router;
export {
  session_routes_default as default
};
