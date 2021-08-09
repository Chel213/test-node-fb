'use strict';

const bcrypt = require(`bcrypt`);
const saltRounds = 10;

module.exports = {
    getHash: async (password)=>{
        return await bcrypt.hash(password, saltRounds);
    },

    compareHash: async (password, userPassword)=>{
        return await bcrypt.compare(password, userPassword)
    }
}
