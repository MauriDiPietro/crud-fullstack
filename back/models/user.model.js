import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const UserModel = db.define(process.env.DB_TABLE_USERS, {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
});

export default UserModel;