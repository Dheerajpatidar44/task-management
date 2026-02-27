const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
	{
		taskId: String,
		developerId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Developer",
		},
		developerUniqueId: String,
		developerName: String,
		developerAvatar: String,
		taskTitle: String,
		taskDescription: String,
		taskDeadline: String,
		taskCompletionDateTime: String,
		taskProcessingDateTime: String,
		createdDateTime: { type: Date, default: Date.now },
		status: { type: String, default: "Pending" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
