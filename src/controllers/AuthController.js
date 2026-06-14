import { AuthService } from "../services/AuthService";
const authService = new AuthService();
const registerUser = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
const loginUser = async (req, res, next) => {
  try {
    const user = await authService.login(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
const getMe = async (req, res, next) => {
  try {
    const user = await authService.getMe(req.user._id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
export {
  getMe,
  loginUser,
  registerUser
};
