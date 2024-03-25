const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.post('/register', (req,res)=>{
    //use passport local to try creating a user
    User.register(new User({username:req.body.username}), req.body.password, (err, newUser)=>{
        if(err){
            return res.render('/register');
        }
        else{
            req.login(newUser, (err)=>{
                res.redirect('/');
            })
        }
    })

})
