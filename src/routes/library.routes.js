import { Router } from "express";
import { getLibrary, addToLibrary, updateLibraryItem, removeFromLibrary } from "../controllers/LibraryController";
import { protect } from "../middlewares/auth";
const router = Router();
router.use(protect);
router.route("/").get(getLibrary).post(addToLibrary);
router.route("/:id").put(updateLibraryItem).delete(removeFromLibrary);
var library_routes_default = router;
export {
  library_routes_default as default
};
