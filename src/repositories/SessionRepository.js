import { GameSession } from "../models/GameSession";
class SessionRepository {
  async findAll() {
    return GameSession.find().populate("game").populate("host", "username avatar");
  }
  async findById(id) {
    return GameSession.findById(id).populate("game").populate("host", "username avatar").populate("participants", "username avatar");
  }
  async create(sessionData) {
    return GameSession.create(sessionData);
  }
  async update(id, sessionData) {
    return GameSession.findByIdAndUpdate(id, sessionData, { new: true });
  }
}
export {
  SessionRepository
};
