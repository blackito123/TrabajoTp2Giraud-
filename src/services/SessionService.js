import { SessionRepository } from "../repositories/SessionRepository";
import { GameRepository } from "../repositories/GameRepository";
class SessionService {
  constructor() {
    this.sessionRepo = new SessionRepository();
    this.gameRepo = new GameRepository();
  }
  async getSessions() {
    return this.sessionRepo.findAll();
  }
  async getSessionById(id) {
    const session = await this.sessionRepo.findById(id);
    if (!session) throw new Error("Session not found");
    return session;
  }
  async createSession(userId, data) {
    const { gameId, ...rest } = data;
    const game = await this.gameRepo.findById(gameId);
    if (!game) throw new Error("Game not found");
    return this.sessionRepo.create({
      ...rest,
      game: gameId,
      host: userId,
      participants: [userId]
      // host is automatically a participant
    });
  }
  async updateSession(userId, userRole, id, data) {
    const session = await this.sessionRepo.findById(id);
    if (!session) throw new Error("Session not found");
    if (session.host._id.toString() !== userId && userRole !== "admin") {
      throw new Error("Not authorized to update this session");
    }
    return this.sessionRepo.update(id, data);
  }
  async joinSession(userId, id) {
    const session = await this.sessionRepo.findById(id);
    if (!session) throw new Error("Session not found");
    if (session.participants.includes(userId)) {
      throw new Error("You are already in this session");
    }
    if (session.participants.length >= session.maxPlayers) {
      throw new Error("Session is full");
    }
    session.participants.push(userId);
    return session.save();
  }
}
export {
  SessionService
};
