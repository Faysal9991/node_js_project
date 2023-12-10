

const  User = require("../model/user_model");
const { check, validationResult } = require('express-validator');


  const getAllUsers = async (req,res, next)=>{
let users;
try{
    users = await User.find();
}catch(error){
    console.log(error);
}
if(!users){
    return res.status(404).json({massage: 'no user found'});
}else{
    return res.status(200).json({users});
}
}
const validate = (req, res, next) => {
    const validationRules = [
      check('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
      check('email').isEmail().withMessage('Invalid email address'),
      check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ];
      validationRules.forEach(rule => rule(req, res, next));
      const errors = validationResult(req);
    if (!errors.isEmpty()) {
       res.status(400).json({ errors: errors.array() });

    }
  };
const signUp = async (req,res)=>{

    const {name ,email,password} = req.body;
   

    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch(err){
        console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"User already exists!,login instead"})
    }else{
       const user = new User({
            name,
            email,
            password
        });
        try{
         await  user.save;
        }catch(err){console.log(err);}
        return res.status(201).json({user});
    }
}
module.exports = {getAllUsers,validate, signUp};



