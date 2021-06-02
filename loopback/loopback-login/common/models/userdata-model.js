'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config')

module.exports = function(Userdatamodel) {
    Userdatamodel.SignUp = async function(req,res) {
        //console.log(req)
        console.log(req)
        const saltRounds = 10;

        if(req.passWord && req.email && req.userId){
            const passwordHash = await bcrypt.hash(req.passWord,saltRounds)
        //console.log(passwordHash)
       }else{
           return res.status(400).send('enter password email userId to signup')
       }

        const userExistAlready = await Userdatamodel.findOne({where:{email:req.email}});

        if(!userExistAlready){
            Userdatamodel.create({userId:req.userId , email:req.email,
            passWord:await bcrypt.hash(req.passWord,saltRounds)})
            return res.status(200).send('SignUp successfull') ;
        }else{
            return res.status(200).send('user already exist');
        }
    }

    Userdatamodel.remoteMethod('SignUp', {
          accepts: [
            {arg: 'req',required:true, type: 'object', 'http': {source: 'body'}},
            {arg: 'res', type: 'object', 'http': {source: 'res'}}
           ],
          returns: {arg: 'res', type: 'object'}
    });


    Userdatamodel.Login = async function(req,res) {
        
        console.log(req.email)
        if(req.email && req.passWord){
            const user = await Userdatamodel.findOne({where: { email: req.email }})
            console.log(`useris`,user)
            const correctPassWord = !user ? false : await bcrypt.compare(req.passWord,user.passWord);
            //console.log(`correct password is `,correctPassWord);
        try{
            if(!(user && correctPassWord)){
               throw(new Error('invalid username or password'))
            }
        }catch(err){
            console.log(err)
            return res.status(401).send({error: err.message})  
        }

            //console.log(config)
            const tokenForUser = {userId:user.userId, email:user.email, _id:user._id};
            const token = jwt.sign(tokenForUser,config.SECRET,{expiresIn:60*60})
            //console.log(token)
            return res.status(200).json(token);
       }
       else{
           return res.status(401).send('enter your username and password ')
       }
    }

    Userdatamodel.remoteMethod('Login', {
          accepts: [
            {arg: 'req',required:true, type: 'object', 'http': {source: 'body'}},
            {arg: 'res', type: 'object', 'http': {source: 'res'}}
           ],
          returns: {arg: 'res', type: 'object','http': {source: 'res'}}
    }); 
};

