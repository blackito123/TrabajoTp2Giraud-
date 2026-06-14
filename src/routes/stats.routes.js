import { Router } from "express";
import { getMyStats } from "../controllers/StatsController";
import { protect } from "../middlewares/auth";
const router = Router();
router.route("/me").get(protect, getMyStats);
var stats_routes_default = router;
export {
  stats_routes_default as default
};
