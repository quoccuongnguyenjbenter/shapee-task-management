const Task = require('../models/task.model')
// var Schema = mongoose.Schema;

module.exports.addTask = function (req, res, next) {
    // res.send('add task endpoint');
    // create taskInfo
    var newTask = new Task({
        idTask: req.body.idTask,
        nameTask: req.body.nameTask,
        userID: req.body.userID,
        status: req.body.status,
        taskStartDate: req.body.taskStartDate,
        taskEndDate: req.body.taskEndDate,
        projectID: req.body.projectID,
        content: req.body.content,
        createdDate: req.body.createdDate,
        editDate: req.body.editDate
    });

    Task.create(newTask, function (err, doc) {

        if (err) {
            res.status(401).json(err);
        }
        res.status(201).json(doc);
    });

}