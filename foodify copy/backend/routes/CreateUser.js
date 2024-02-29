const express= require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Creating new user
const jwtSecret="dheerajcandoanythinglike$#@"
router.post("/createUser",[
    body('email','enter a valid email').isEmail(),
    body('password','password should be min of length 5').isLength({min:5}),
], async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    const salt = await bcrypt.genSalt(10)
    let secPassword = await bcrypt.hash(req.body.password,salt)
    try {
      await  User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:secPassword
        })
        res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})


// log in user

router.post('/loginUser',[
    body('email','enter a valid email').isEmail(),
    body('password','password should be min of length 5').isLength({min:5}),
], async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()})
    }
    let email = req.body.email;
    try {
        let userData = await User.findOne({email})
        if(!userData)
        {
            return res.status(400).json({errors:"Wrong email"})
        }
        //let password= req.body.password
        /*const isPasswordValid = await bcrypt.compare(password, userData.password);
        if(req.body.password!==userData.password)
        {
            return res.status(400).json({errors:"Wrong Credentials password"})
        }*/

        const isPasswordValid = await bcrypt.compare(req.body.password, userData.password);
        if (!isPasswordValid) {
              return res.status(400).json({errors: "Wrong password" });
          }
          const data={
              user:
              {
                  id:userData.id
              }
          }
          const AuthToken= jwt.sign(data,jwtSecret)
        return res.json({success:true,AuthToken:AuthToken})
    } catch (error) {
        console.log(error)
        res.json({success:false})
        
    }
})

module.exports=router