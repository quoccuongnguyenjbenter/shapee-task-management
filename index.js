const express = require('express');
const bodyparser = require('body-parser');



// const apiTaskRoute = require('./api/routes/task.route');

const taskRoute = require('./routers/task.router');

const { mongoose } = require('./db');

var app = express();

const post = 3000;

// app.use(express.static("public"));
app.set("view engine","pug");
app.set("views","./views");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// const post = process.env.POST || 3000;
// app.listen( post, () => console.log('Server started at port: '+post));

app.get("/",function(req,res){
    res.render("index");
});

// app.use('/tasks', taskRoute);
// app.use('/api/tasks', apiTaskRoute);
// app.use('/api/tasks',apiProductRoute);
app.use('/tasks', taskRoute);
app.listen( post, () => console.log('Server started at port: '+post));