const express = require('express');
const router = express.Router();

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MySQLStore = require('express-mysql-session')(session);

const { insertUserinfo, getUserinfo, updateUserinfo } = require('../dbmodule/querys');
const { debug_log } = require('../config/debug');

const options = {
    host: "localhost",
    port: 3306,
    user: "yui",
    password: "1q2w3e4r",
    database: "cinstagram",
};
const sessionStore = new MySQLStore(options);
// console.log(sessionStore);

router.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure:false
    },
    store: sessionStore,
}));

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(param, done){
    debug_log('serializeUser', param);
    done(null, param);
});

passport.deserializeUser(function(param, done){
    debug_log('deserializeUser', param);
    
    getUserinfo(param)
    .then(res => {
        let info = { email: res[0].email, pwd: res[0].pwd };
        // debug_log(info);
        
        updateUserinfo(info)
        .then(()=>{
            done(null, param);
        })
        .catch(err => {
            done(err, null);
        });
    })
    .catch(err => {
        done(err, null);
    });
});

passport.use('local', new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'pwd',
    },
    function(param1, param2, done) {
        debug_log('LocalStrategy func', param1, param2);

        const user = { email:param1, pwd:param2 };

        getUserinfo(user)
        .then((queryResult) => {
            debug_log('success');
            return done(null, user);
        })
        .catch((err) => {
            debug_log(err);
            return done(null, false, {message:'failed'});
        });
    }
));

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/auth', function(req, res, next) {
	let isAuth = req.isAuthenticated();
    res.send({isAuthenticated:isAuth});
});

module.exports = router;
