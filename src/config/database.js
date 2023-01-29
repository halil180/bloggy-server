import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import { Sequelize }  from 'sequelize';
import Comment from "../models/comment-model.js"
import Post from "../models/post-model.js"
import User from "../models/user-model.js"

export const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
  });

  User.hasMany(Comment, { foreignKey: 'userId' ,onDelete:"CASCADE"});
  Comment.belongsTo(User, { foreignKey: 'userId' });
  
  
  Post.hasMany(Comment, { foreignKey: 'postId' });
  Comment.belongsTo(Post, { foreignKey: 'postId' });
  
  User.hasMany(Post, { foreignKey: 'userId' ,onDelete: 'CASCADE' });
  Post.belongsTo(User, { foreignKey: 'userId' });

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        await User.sync();
        await Post.sync();
        await Comment.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  };
connectToDatabase();