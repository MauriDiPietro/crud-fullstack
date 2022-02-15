import db from '../database/db';
import { DataTypes } from 'sequelize/types';

const BlogModel = db.define('series', {
    title: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    }
});

export default BlogModel;