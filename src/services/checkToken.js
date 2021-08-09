'use strict';

const {db} = require('../db/db');

const checkToken = async (token)=>{
    try {
        const user = await db.Users.findOne({
            where: {token: token},
            raw: true
        });

        if(!user) {
            return false
        }
        return true;
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = checkToken;
