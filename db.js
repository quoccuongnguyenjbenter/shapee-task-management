const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:user123456@mongodbc-lfkub.mongodb.net/task-management?retryWrites=true', (err) => {
    if (!err) {
        console.log('MongoDB connection succeeded!');
    } else {
        console.log('Err in DB connection:' +JSON.stringify(err));
    }
});

module.exports = mongoose;
