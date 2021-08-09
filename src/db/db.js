'use strict';

const Sequelize = require(`sequelize`);

const Operator = Sequelize.Op;

const sequelize = new Sequelize(`postgres`, `postgres`, `postgres`, {
    host: 'db',
    dialect: `postgres`,
});


const Users = require(`../models/users`)(sequelize);

const initDb = async () => {
    // await sequelize.sync({ force: true});
    await sequelize.sync();
    console.info(`Структура БД успешно создана.`);
};

module.exports = {
    db: {
       Users
    },
    initDb,
    sequelize,
    Operator
};
