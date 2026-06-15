import { Router } from "express";
import { getLibrary, addToLibrary, updateLibraryItem, removeFromLibrary } from "../controllers/LibraryController";
import { protect } from "../middlewares/auth";
const router = Router();
router.use(protect);
/**
 * @openapi
 * /library:
 *   get:
 *     summary: Obtener la biblioteca del usuario
 *     tags: [Library]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de juegos en la biblioteca
 *   post:
 *     summary: Añadir un juego a la biblioteca
 *     tags: [Library]
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
 *               status:
 *                 type: string
 *                 enum: ["Pendiente", "Jugando", "Completado", "Abandonado", "Quiero Jugar"]
 *                 example: "Jugando"
 *     responses:
 *       201:
 *         description: Juego añadido a la biblioteca
 */
router.route("/").get(getLibrary).post(addToLibrary);

/**
 * @openapi
 * /library/{id}:
 *   put:
 *     summary: Actualizar estado de un juego en la biblioteca
 *     tags: [Library]
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
 *               status:
 *                 type: string
 *                 enum: ["Pendiente", "Jugando", "Completado", "Abandonado", "Quiero Jugar"]
 *                 example: "Jugando"
 *               rating:
 *                 type: number
 *     responses:
 *       200:
 *         description: Biblioteca actualizada
 *   delete:
 *     summary: Eliminar un juego de la biblioteca
 *     tags: [Library]
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
 *         description: Juego eliminado de la biblioteca
 */
router.route("/:id").put(updateLibraryItem).delete(removeFromLibrary);
var library_routes_default = router;
export {
  library_routes_default as default
};