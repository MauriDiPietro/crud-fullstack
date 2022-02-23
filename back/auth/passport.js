import passport from 'passport';
import { Strategy as LocalStrategy} from 'passport-local'
// import pkg from 'passport-local'
// const passportLocal = pkg;
import UserModel from '../models/user.model.js';
// const LocalStrategy = passportLocal.Strategy;


//SIGNUP
passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
async(req, username, password, done)=>{
    const user = await UserModel.findOne({
        where: {
            username,
            password
        }
    });
    if(!user){
        const userNew = await UserModel.create({
            username,
            password
        });
        return done(null, userNew)
    }
    return done(null, false)
}
));

//SERIALIZACIÓN
passport.serializeUser((user, done)=>{
    done(null, user.id)
});

//DESERIALIZACIÓN
passport.deserializeUser(async(id, done)=>{
    const user = await UserModel.findOne({
        where: {
            id
        }
    });
    done(null, user)
});

//SIGNIN
passport.use('local-login', new LocalStrategy(async (username, password, done)=>{
    const user = await UserModel.findOne({
        where: {
            username, 
            password
        }
    })
    if(user){
       return done(null, user)
    }
    done(null, false)
}));

export default passport;
