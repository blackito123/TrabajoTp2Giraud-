import { Router } from "express";
import { getMyStats } from "../controllers/StatsController";
import { protect } from "../middlewares/auth";
const router = Router();
/**
 * @openapi
 * /stats/me:
 *   get:
 *     summary: Obtener mis estadísticas
 *     tags: [Stats]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Estadísticas del usuario
 */
router.route("/me").get(protect, getMyStats);
var stats_routes_default = router;
export {
  stats_routes_default as default
};
