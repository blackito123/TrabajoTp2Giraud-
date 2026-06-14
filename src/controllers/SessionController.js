import { SessionService } from "../services/SessionService";
const sessionService = new SessionService();
const getSessions = async (req, res, next) => {
  try {
    const sessions = await sessionService.getSessions();
    res.json(sessions);
  } catch (error) {
    next(error);
  }
};
const createSession = async (req, res, next) => {
  try {
    const session = await sessionService.createSession(req.user._id, req.body);
    res.status(201).json(session);
  } catch (error) {
    next(error);
  }
};
const getSessionById = async (req, res, next) => {
  try {
    const session = await sessionService.getSessionById(req.params.id);
    res.json(session);
  } catch (error) {
    next(error);
  }
};
const updateSession = async (req, res, next) => {
  try {
    const session = await sessionService.updateSession(
      req.user._id,
      req.user.role,
      req.params.id,
      req.body
    );
    res.json(session);
  } catch (error) {
    next(error);
  }
};
const joinSession = async (req, res, next) => {
  try {
    const session = await sessionService.joinSession(req.user._id, req.params.id);
    res.json(session);
  } catch (error) {
    next(error);
  }
};
export {
  createSession,
  getSessionById,
  getSessions,
  joinSession,
  updateSession
};
