import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
// import BlogModel from '../models/blog.model.js';
// import UserModel from '../models/user.model.js';

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.HOST,
    dialect: 'mysql'
});

// UserModel.hasMany(BlogModel);
// BlogModel.belongsTo(UserModel);

export default db;