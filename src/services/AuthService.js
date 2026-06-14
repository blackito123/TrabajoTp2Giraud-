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
      throw new Error("User already exists with this email");
    }
    const usernameExists = await this.userRepo.findByUsername(username);
    if (usernameExists) {
      throw new Error("Username already taken");
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
      throw new Error("Invalid email or password");
    }
  }
  async getMe(userId) {
    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error("User not found");
    return user;
  }
}
export {
  AuthService
};
