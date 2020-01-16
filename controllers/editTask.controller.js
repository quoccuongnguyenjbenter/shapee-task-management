const Task = require('../models/task.model')


module.exports.editTask = function (req, res) {
    // res.send('edit endpoint');

    var taskInfo = {
        idTask: req.body.idTask,
        nameTask: req.body.nameTask,
        userID: req.body.userID,
        status: req.body.status,
        taskStartDate: req.body.taskStartDate,
        taskEndDate: req.body.taskEndDate,
        projectID: req.body.projectID,
        content: req.body.content,
        createdDate: req.body.createdDate,
        editDate: new Date()
    };

    var query = { 'idTask': req.body.idTask };

    Task.update(query, taskInfo, function (err, doc) {

        if (err) {
            res.status(401).json(err);
        }
        res.status(200).json(doc);
    });

}
