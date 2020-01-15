var Task = require('../../models/task.model');

// module.exports.index = async function(req, res) {
//   var tasks = await Task.find();
//   res.json(tasks);
// };

// module.exports.create = async function(req, res) {
//   var product = await Product.create(req.body);
//   res.json(product);
// };

module.exports.index = async (req, res) => {
  await Project.find((err, projects) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Projects retrieved successfully",
      data: projects
    });
  });
}
module.exports.detail = async (req, res) => {
  await Project.findById(req.params._id, (err, project) => {
    if (err) {
      res.json({
        status: "error",
      });
    }
    res.json({
      status: "success",
      message: "Project detail",
      data: project
    });
  });
}
module.exports.search = async (req, res) => {
  let q = req.query.q;
  const projects = await Project.find();
  let result = projects.filter(project =>
    project.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  );
  if (result) {
    res.json({
      status: "success",
      message: "Found the result",
      data: result
    })
  }
  res.json({
    status: "error"
  })
}
module.exports.filter = async (req, res) => {
  let stus = req.query.stus;
  const tasks = await Project.find();
  let result = tasks.filter(task =>
    task.status.indexOf(stus) !== -1
  );
  if (result) {
    res.json({
      status: "success",
      message: "Filter status",
      data: result
    })
  }
  res.json({
    status: "error"
  })
}