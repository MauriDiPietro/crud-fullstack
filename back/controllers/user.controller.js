import UserModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import BlogModel from "../models/blog.model.js";
dotenv.config();

export const createUser = async (req, res)=>{
  
    const {username, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({message: 'password incorrect'});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password.toString(), salt);
    try{
      await UserModel.create({
        username: username,
        password: hashPassword
      })
      res.status(200).json({message: 'User register OK!'})
    }catch(err){
      res.status(500).send({message: err.message})
    }
}; 

export const getUserById = async(req, res)=>{
  const { id } = req.params;
    try{
      const user = await UserModel.findOne({
        where: {
          id
        },
        include: [{
          model: BlogModel,
          as: 'posts',
          attributes: ['title', 'content']
        }],
        attributes: ['id', 'username']
      })
      // ({
      //   where: {
      //     username: req.body.username
      //   },
      //   attributes: ['id', 'username']
      // })
      if(!user){
        res.send('user not exists in database!')
      }
      res.json(user)
    }catch(err){
        res.json({message: err.message});
    }
}

export const getUsers = async(req, res)=>{

    try{
      const user = await UserModel.findAll({
        include: [{
          model: BlogModel,
          as: 'posts',
          attributes: ['title']
        }],
        attributes: ['id', 'username']
      })
      if(!user){
        res.send('database is empty!')
      }
      res.json(user)
    }catch(err){
        res.json({message: err.message});
    }
}

export const loginUser = async (req, res)=>{
  try{
    const user = await UserModel.findAll({
      where: {
        username: req.body.username
      }
    });
    const match = await bcrypt.compare(req.body.password.toString(), user[0].password);
    if(!match) return res.status(400).json({message: 'Wrong password!'});
    const userId = user[0].id;
    const username = user[0].username;
    const accessToken = jwt.sign({userId, username}, process.env.ACCESS_TOKEN, {
      expiresIn: '1d'
    });
    res.json({ accessToken })
    console.log(req.user)
  }catch(err){
    res.status(404).json({message: err.message});
  }
};

export const refreshToken = async(req, res)=>{
  console.log('console.log--->', req.session.refreshToken)
  try {
    const refreshToken = req.session.refreshToken;
    if(!refreshToken) return res.sendStatus(401);
    const user = await UserModel.findAll({
      where: {
        refresh_token: refreshToken
      }
    });
    if(!user[0]) return res.sendStatus(401);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded)=>{
      if(err) return res.sendStatus(403);
      const userId = user[0].id;
      const username = user[0].username;
      const accessToken = jwt.sign({userId, username}, process.env.ACCESS_TOKEN, {
        expiresIn: '1d'
      });
      res.json({ accessToken });
    })
  } catch (err) {
    res.status(404).json({message: err.message});
  }
};

export const logout = async (req, res)=>{
  const token = req.cookies.token
};