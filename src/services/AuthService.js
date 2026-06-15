import { UserRepository } from "../repositories/UserRepository";
import { generateToken } from "../utils/jwt";
class AuthService {
  constructor() {
    this.userRepo = new UserRepository();
  }
  async register(data) {
    const { name, username, email, password } = data;
    const userExists = await this.userRepo.findByEmail(email);
    if (userExists) {
      const error = new Error("User already exists with this email");
      error.statusCode = 400;
      throw error;
    }
    const usernameExists = await this.userRepo.findByUsername(username);
    if (usernameExists) {
      const error = new Error("Username already taken");
      error.statusCode = 400;
      throw error;
    }
    const user = await this.userRepo.create({
      name,
      username,
      email,
      password
    });
    return {
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      role: user.role,
      token: generateToken(user._id, user.role)
    };
  }
  async login(data) {
    const { email, password } = data;
    const user = await this.userRepo.findByEmail(email);
    if (user && await user.matchPassword(password)) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        role: user.role,
        token: generateToken(user._id, user.role)
      };
    } else {
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      throw error;
    }
  }
  async getMe(userId) {
    const user = await this.userRepo.findById(userId);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    return user;
  }
}
export {
  AuthService
};
