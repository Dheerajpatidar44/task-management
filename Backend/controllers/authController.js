const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Developer = require("../models/Developer");

exports.loginAdmin = async (req, res) => {
	const { username, password } = req.body;
	const admin = await Admin.findOne({ username });
	if (!admin || admin.password !== password) {
		return res.status(401).json({ message: "Invalid username or password" });
	}
	const token = jwt.sign({ id: admin._id }, "adminLoginKey", {
		expiresIn: "1h",
	});
	res.json(token);
};

exports.loginDeveloper = async (req, res) => {
	const { username, password } = req.body;
	const developer = await Developer.findOne({ username });
	if (!developer || developer.password !== password) {
		return res.status(401).json({ message: "Invalid username or password" });
	}
	const token = jwt.sign({ id: developer._id }, "developerLoginKey", {
		expiresIn: "1h",
	});             
	res.json(token);
};
