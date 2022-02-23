import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import db from './database/db.js';
import blogRoutes from './routes/blog.routes.js';
import userRoutes from './routes/user.routes.js';
import passport from 'passport';
import UserModel from './models/user.model.js';
import configPassport from './auth/passport.js';
import session from 'express-session';
import dotenv from 'dotenv';
dotenv.config();


// const corsOptions = {
//     origin: 'http://localhost:8081'
// }


const PORT = process.env.PORT

const app = express();

/*DATABASE*/
db.sync({force:false})
.then(()=>{
    console.log('Conexión a la Base de datos exitosa')
})
.catch((err)=>{
    console.log(`Error al conectar a la Base de datos= ${err}`)
});

/*MIDDLEWARES*/
// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
// app.use((req, res, next)=>{
//     res.header(
//         "Access-Control-Allow-Headers",
//         "x-access-token, Origin, Content-Type, Accept"
//     );
//     next()
// });
/*SESSION*/
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}));
// app.use(passport.initialize());
// app.use(passport.session());


/*ROUTES*/
app.use('/blogs', blogRoutes);
app.use('/users', userRoutes);



app.listen(PORT, ()=>{
    console.log(`Server ok on port= ${PORT}`)
});
