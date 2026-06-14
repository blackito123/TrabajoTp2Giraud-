import { Router } from "express";
import { getSessions, createSession, getSessionById, updateSession, joinSession } from "../controllers/SessionController";
import { protect } from "../middlewares/auth";
const router = Router();
router.route("/").get(getSessions).post(protect, createSession);
router.route("/:id").get(getSessionById).put(protect, updateSession);
router.route("/:id/join").post(protect, joinSession);
var session_routes_default = router;
export {
  session_routes_default as default
};
