import { Router } from "express";
import { registerUser, loginUser, getMe } from "../controllers/AuthController";
import { protect } from "../middlewares/auth";
const router = Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
var auth_routes_default = router;
export {
  auth_routes_default as default
};
