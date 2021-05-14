const express = require('express');
const studentRouter = require('./routers/student');
require('./db/conn');

const app = express();
const port = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(studentRouter);
app.listen(port, () => {
    console.log(`server started on port ${port}`);
});