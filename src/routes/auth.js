'use strict';

const {Router} = require('express');
const {randomBytes} = require('crypto');
const {db} = require('../db/db');
const findUserDb = require('../services/findUserDb');
const checkFieldAuth = require('../middleware/checkFieldAuth');
const {getHash, compareHash} = require('../services/hash');

const  authRouter = new Router();

authRouter.post('/login',  checkFieldAuth, async (req, res)=>{

    const {login, password} = req.body;
    const loginFormat = login.toLowerCase();
    const user = await findUserDb(loginFormat);

     if(!user){
         res.status(403)
             .send({status: 'Error', message: 'User is not found'});

         return;
     }

    const math = await compareHash(password, user.password);

     if(!math) {
         res.status(403)
             .send({status: 'Error', message: 'invalid login password'});

         return;
     }

    res.status(200)
        .send({
            status: 'OK',
            message: {login: user.login, token: user.token}
        });
});


authRouter.post('/register', async (req, res)=>{
    const {login, password} = req.body;
    const loginFormat = login.toLowerCase();
    const user = await findUserDb(loginFormat);

    if(user){
        res.status(403)
            .send({status: 'Error', message: 'user already exists'});

        return
    }

    const hash = await getHash(password);
    const token = 'Bearer' + randomBytes(32).toString('hex');
    const result = await db.Users.create({
        login: loginFormat,
        password: hash,
        token,
    });
    res.status(201)
        .send({
            status: "success",
            message: {login: result.login, token: result.token}
        });
});

module.exports = authRouter;
