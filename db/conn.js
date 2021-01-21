const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gadget',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log('connection is successful');
})
.catch((error)=>{
    console.log(error);
})