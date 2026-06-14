import { StatsService } from "../services/StatsService";
const statsService = new StatsService();
const getMyStats = async (req, res, next) => {
  try {
    const stats = await statsService.getUserStats(req.user._id);
    res.json(stats);
  } catch (error) {
    next(error);
  }
};
export {
  getMyStats
};
