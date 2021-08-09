'use strict';

module.exports = (req, res, next) => {
    const {login, password} = req.body;
    if(!login) res.status(200).send({error: 'login field is not filled'});
    if(!password) res.status(200).send({error: 'login password is not filled'});
    next();
}
