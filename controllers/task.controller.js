const Task = require('../models/task.model')

module.exports.index = async (req, res) => {
    let perPage = 8, page = parseInt(req.query.page) || 1;
    await Task.find()
        .limit(perPage)
        .skip((page - 1) * perPage)
        .exec((err, tasks) => {
            Task.count().exec((err, count) => {
                res.render('tasks/index', {
                    tasks: tasks,
                    page: page,
                    pages: Math.ceil(count / perPage)
                })
            })
        })
}
module.exports.index = async (req, res) => {
    const tasks = await Task.find();
    res.render('tasks/index', {
        tasks: tasks
    });
}
module.exports.detail = async (req, res) => {
    let task = await Task.findById({ _id: req.params.id });
    res.render('tasks/view', {
        tasks: task
    });
}
module.exports.search = async (req, res) => {
    let q = req.query.q;
    console.log(q);
    const tasks = await Task.find();

    let result = tasks.filter(project =>
        task.name.toLowerCase().indexOf(q.toLowerCase()) !== -1);
    res.render('tasks/index', {
        projects: result
    });
}
module.exports.filter = async (req, res) => {
    // let stus = req.params.Active
    let stus = req.query.stus;
    // console.log(stus);
    const tasks = await Task.find();
    // console.log(result);
    // let result = tasks.filter(project => task.status === stus)
    let result = tasks.filter(project =>
        task.status.indexOf(stus) !== -1
    );
    res.render('tasks/index', {
        tasks: result
    })
    // console.log(result);
}