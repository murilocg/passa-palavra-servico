import UserSchema from "./userSchema";

const Sequelize = require('sequelize');
const config = require('./sequelizeconfig.json');
const sequelize = new Sequelize(config.database, config.user, config.password, config);

const User = sequelize.import('./userSchema');
sequelize.sync();
export default {User}