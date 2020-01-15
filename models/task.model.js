var mongoose = require('mongoose');
var datetime=require('node-datetime')

var taskSchema = new mongoose.Schema({
	idTask: Number,
	// nameTask: String,
	nameTask: {
		type: String
	},
	userID: Number,
	// userID:[
	// 	{type: Schema.Types.ObjectId,ref:'User'}
	// ],
	// status: Boolean,
	status: String,
	taskStartDate: Date,
	taskEndDate: Date,
	projectID: Number,
	// projectID: [
	// 	{type: Schema.Types.ObjectId,ref:'Project'}
	// ],
	content: String,
	// createdDate: Date,
	createdDate: {
		type: Date,
		default: Date.now
	},
	// editDate: Date
	editDate: {
		type: Date,
		default: Date.now
	}
});

var Task = mongoose.model('Task', taskSchema, 'tasks');

module.exports = Task;