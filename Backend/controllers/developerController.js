const Task = require("../models/Task");

exports.getMyTask = async (req, res) => {
	const tasks = await Task.find({ developerId: req.developer._id });
	res.json(tasks);
};

exports.updateTaskStatus = async (req, res) => {
	const tasks = await Task.findByIdAndUpdate(
		req.params.taskId,
		{ status: req.body.status },
		{ new: true }
	);
	res.json(tasks);
};
