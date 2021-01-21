const express = require('express');
require('./db/conn');
const bodyParser = require('body-parser');


const app = express();


const port = process.env.PORT||4000;
const Router = require("./routers/users");



//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(Router);

app.listen(port, ()=>console.log('server is listening at port' + port));