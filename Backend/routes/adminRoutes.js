const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { adminAuth } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post(
	"/create-admin",
	upload.single("avatar"),
	adminController.createAdmin
);
router.post(
	"/add-developer",
	adminAuth,
	upload.single("avatar"),
	adminController.addDeveloper
);
router.get("/developers", adminAuth, adminController.getAllDeveloper);
router.post("/add-task", adminAuth, adminController.addTask);
router.get("/tasks", adminAuth, adminController.getAllTasks);
router.delete("/developer/:id", adminAuth, adminController.deleteDeveloper);
router.get("/tasks/:devId", adminAuth, adminController.getTaskByDeveloper);

module.exports = router;
