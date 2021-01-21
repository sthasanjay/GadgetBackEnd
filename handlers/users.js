const UserModel = require('../models/users');
const responder = require('./messageResponder');


const addUsers = async(req,res)=>{
    try {
        const users = new UserModel({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password,
        });
      
     users.save().then((result)=>{
        
         responder(res,200, 'success',null,'Registration successfull');
         })
         .catch((error)=>{
             console.log(error);
         })
    } catch (error) {
        console.log(error);
    }

}


const getUsers = (req,res)=>{
    const user = UserModel.find();
    user.exec()
    .then(()=>{
        res.send('comming soon');
    })
    .catch((error)=>{
        res.send('error');
    })
}

module.exports={
    addUsers,
    getUsers
}