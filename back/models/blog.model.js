import db from '../database/db.js';
import { DataTypes } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const BlogModel = db.define(process.env.DB_TABLE_BLOGS, {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
});

export default BlogModel;