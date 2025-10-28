import express from "express";
import userServices from "#@/modules/user/services/index.js";
import { STATUS_CODES } from "#@/_shared/enums/httpStatusCode.js";

const router = express.Router({ mergeParams: true });

// GET /users - Get all users
router.get("/", async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const query = { page: parseInt(page), limit: parseInt(limit) };

    const data = await userServices.fetchAll({ query });

    res.status(STATUS_CODES.OK).json({ success: true, data });
  } catch (error) {
    next(error);
  }
});

// POST /users - Create new user
router.post("/", async (req, res, next) => {
  try {
    const { name, email, password, role, status } = req.body;
    const payload = { name, email, password, role, status };

    const data = await userServices.createOne({ payload });

    res.status(STATUS_CODES.CREATED).json({ success: true, data });
  } catch (error) {
    next(error);
  }
});

export default router;
