const express = require('express');
require('./db/conn');

const app = express();
const port = process.env.PORT||4000;
const Router = require("./routers/users");



//middleware
app.use(Router);

app.listen(port, ()=>console.log('server is listening at port' + port));