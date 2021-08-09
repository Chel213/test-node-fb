'use strict';

const {db} = require('../db/db');

const findUserDb = async (login)=>{
    try {
        const user = await db.Users.findOne({
            where: {
                login: login
            },
            raw: true
        });
        return user;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = findUserDb;
