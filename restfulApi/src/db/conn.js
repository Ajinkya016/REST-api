const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/student", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection is successfull');
}).catch(e => console.log(e));