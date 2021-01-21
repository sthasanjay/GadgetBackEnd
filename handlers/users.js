const UserModel = require('../models/users');
const responder = require('./messageResponder');
const validation = require('./validation');

const addUsers = async(req,res)=>{
    try {
        const rawBody = req.body;
        const body = validation.trimmedBody(rawBody);

        if(validation.isAllEmpty(
            body.firstname,
            body.lastname,
            body.email,
            body.password
        )){
            responder(res,200,'error',null,'all field are required !');
            return false;
        } 

        for(key in body){
            if(body[key]==""){
                responder(res,200,'error',key , `${key} is required`);
            }
        }
        
        if(!validation.isAlphabetOnly(body.firstname)){
            responder(res,200,'error','firstname','only alphabets allowed');
            return false;
        }
        if(!validation.isAlphabetOnly(body.lastname)){
            responder(res,200,'error','lastname','only alphabate required');
            return false;
        }
        if(!validation.isLength(body.firstname)){
            responder(res,200,'error','firstname','character length must be above 2 and below 10');
            return false;
        }
        if(!validation.isEmail(body.email)){
            responder(res,200,'error','email','invalid email');
            return false;
        }
        if(!validation.isValidPassword(body.password)){
            responder(res,200,'error','password',  "Password must contain at least one lowercase, uppercase, number and special characters of 8-15 length !")
        }

      
     const isEmailExit = await UserModel.findOne({ email: body.email});
     if(isEmailExit){
         responder(res,200,'error','email','email aleardy exit');
     }


     const users = new UserModel(body);
      
     users.save().then(()=>{
        
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