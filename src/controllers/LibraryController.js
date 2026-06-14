import { LibraryService } from "../services/LibraryService";
const libraryService = new LibraryService();
const getLibrary = async (req, res, next) => {
  try {
    const library = await libraryService.getMyLibrary(req.user._id);
    res.json(library);
  } catch (error) {
    next(error);
  }
};
const addToLibrary = async (req, res, next) => {
  try {
    const item = await libraryService.addToLibrary(req.user._id, req.body);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};
const updateLibraryItem = async (req, res, next) => {
  try {
    const item = await libraryService.updateLibraryItem(req.user._id, req.params.id, req.body);
    res.json(item);
  } catch (error) {
    next(error);
  }
};
const removeFromLibrary = async (req, res, next) => {
  try {
    await libraryService.removeFromLibrary(req.user._id, req.params.id);
    res.json({ message: "Item removed from library" });
  } catch (error) {
    next(error);
  }
};
export {
  addToLibrary,
  getLibrary,
  removeFromLibrary,
  updateLibraryItem
};
