const express = require('express');
const res = require('express/lib/response');
const app = express();
const facultyRoute = require('./api/routes/faculty');

app.use("/faculty",facultyRoute);
app.use((req,res,next)=>{
    res.status(200).json({massage:"hello world...dsd"})
})

module.exports = app;