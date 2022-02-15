import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import db from './database/db.js';
import blogRoutes from './routes/blog.routes.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT

const app = express();

db.sync({force:false})
.then(()=>{
    console.log('Conexión a la Base de datos exitosa')
})
.catch((err)=>{
    console.log(`Error al conectar a la Base de datos= ${err}`)
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('dev'));
app.use('/blogs', blogRoutes);



app.listen(PORT, ()=>{
    console.log(`Server ok on port= ${PORT}`)
});
