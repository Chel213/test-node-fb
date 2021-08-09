'use strict';

const checkToken = require('../services/checkToken');

module.exports = async (req, res, next)=>{

    const token = req.header('Authorization');
        if (!token) {
        res.status(401)
            .send({status: 'error', message: 'Access is denied'});
        return;
    }

    const isAuth = await checkToken(token);

    if (!isAuth) {
        res.status(401)
            .send({status: 'error', message: 'Access is denied'});
        return;
    }

    next();
}
