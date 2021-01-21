const UserModel = require('../models/users');

const addUsers = (req,res)=>{
    const users = UserModel.find();
    users.exec()
    .then(()=>{
        console.log('connect');
    })
    .catch((error)=>{
        console.log('error');
    })
}

module.exports={
    addUsers
}