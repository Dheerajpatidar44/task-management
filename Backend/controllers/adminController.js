const Admin = require("../models/Admin");
const Developer = require("../models/Developer");
const Task = require("../models/Task");
exports.createAdmin = async (req, res) => {
	try {
		const admin = await Admin.create(req.body);
		res.status(201).json(admin);
	} catch (error) {
		res.status(500).json({ message: "Failed to create admin", error });
	}
};

exports.addDeveloper = async (req, res) => {
	const developer = await Developer.create(req.body);
	res.json(developer);
};

exports.getAllDeveloper = async (req, res) => {
	const developer = await Developer.find();
	res.json(developer);
};

exports.deleteDeveloper = async (req, res) => {
	await Developer.findByIdAndDelete(req.params.id);
	res.json("Developer Deleted");
};

exports.addTask = async (req, res) => {
	const task = await Task.create(req.body);
	res.json(task);
};

exports.getTaskByDeveloper = async (req, res) => {
	const tasks = await Task.find({ developerId: req.params.id });
	res.json(tasks);
};

exports.getAllTasks = async (req, res) => {
	const tasks = await Task.find().populate("developerId");
	res.json(tasks);
};
