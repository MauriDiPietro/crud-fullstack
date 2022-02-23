import express from 'express';
import { createUser, getUserById, loginUser } from '../controllers/user.controller.js';
const router = express.Router();
import {verifyToken} from '../middlewares/verifyToken.js';



router.post('/signup', createUser);

router.post('/login', loginUser);


router.get('/login', getUserById);

router.get('/home/:id', verifyToken, getUserById)

export default router;

//ROUTES
// app.get('/home', auth, (req, res)=>{
//     // console.log(req.user)
//     res.render('profile', {user: req.user.username}) //usuario deserializado
// });

// app.get('/login', (req, res)=>{
//     res.render('login');
//     // console.log(req.session)
//     // console.log(req.user)
// });

// app.get('/signup', (req, res)=>{
//     res.render('signup')
// });


// app.get('/logout', (req, res)=>{
//     req.logOut();
//     res.redirect('/login')
// });

// app.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/login',
//     failureRedirect: '/signup'
// }));

// app.post('/login', passport.authenticate('local-login', {
//     successRedirect: '/home',
//     failureRedirect: '/login'
// }));