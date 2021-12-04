const Sequelize = require('sequelize');
const { DB } = require('../environments');
const config = DB;
const db = {}

const database = new Sequelize(config.database, config.username, config.password, config);
const User = require('../../contex/dataAcces/user.entity')(database, Sequelize);

db.user = User;

db.sequelize = database;
db.Sequelize = Sequelize;

module.exports = {
    db,
    User
}

