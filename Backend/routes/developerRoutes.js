const express = require("express");
const router = express.Router();
const developerController = require("../controllers/developerController");
const { developerAuth } = require("../middleware/authMiddleware");

router.get("/tasks", developerAuth, developerController.getMyTask);
router.put(
	"/task-status/:taskId",
	developerAuth,
	developerController.updateTaskStatus
);

module.exports = router;
