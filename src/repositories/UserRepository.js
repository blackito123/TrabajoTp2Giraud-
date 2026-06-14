import { User } from "../models/User";
class UserRepository {
  async findByEmail(email) {
    return User.findOne({ email });
  }
  async findByUsername(username) {
    return User.findOne({ username });
  }
  async create(userData) {
    return User.create(userData);
  }
  async findById(id) {
    return User.findById(id).select("-password");
  }
}
export {
  UserRepository
};
