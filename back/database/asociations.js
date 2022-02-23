import BlogModel from '../models/blog.model.js';
import UserModel from '../models/user.model.js';

UserModel.hasMany(BlogModel, { as: 'posts', foreignKey: 'userId' });
BlogModel.belongsTo(UserModel, { as: 'user' });