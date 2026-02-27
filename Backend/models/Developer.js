const mongoose = require("mongoose");
const DeveloperSchema = new mongoose.Schema(
	{
		developerUniqueId: String,
		name: String,
		email: String,
		contact: String,
		username: String,
		password: String,
		role: String,
		rating: Number,
		avatar: String,
		gender: String,
		createdDateTime: { type: Date, default: Date.now },
		status: { type: String, default: "Active" },
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Developer", DeveloperSchema);
