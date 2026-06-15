import { Router } from "express";
import { registerUser, loginUser, getMe } from "../controllers/AuthController";
import { protect } from "../middlewares/auth";
const router = Router();
/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Alex Giraud"
 *               username:
 *                 type: string
 *                 example: "alexgi"
 *               email:
 *                 type: string
 *                 example: "alexgiiraud@gmail.com"
 *               password:
 *                 type: string
 *                 example: "hola123"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error en los datos proporcionados
 */
router.post("/register", registerUser);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "alexgiiraud@gmail.com"
 *               password:
 *                 type: string
 *                 example: "hola123"
 *     responses:
 *       200:
 *         description: Login exitoso
 *       401:
 *         description: Credenciales inválidas
 */
router.post("/login", loginUser);

/**
 * @openapi
 * /auth/me:
 *   get:
 *     summary: Obtener perfil del usuario autenticado
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil del usuario
 *       401:
 *         description: No autorizado
 */
router.get("/me", protect, getMe);
var auth_routes_default = router;
export {
  auth_routes_default as default
};