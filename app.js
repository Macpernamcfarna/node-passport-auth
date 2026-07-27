const express =require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

// PASSPORT CONFIG
require('./config/passport')(passport);

// DB CONFIG
const db = require('./config/keys').MongoURI;

// CONNECT TO MONGO
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected... '))
    .catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//BODY-PARSER
app.use(express.urlencoded({ extended: false }));

//EXPRESS SESSION
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

//PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

//CONNECT FLASH
app.use(flash());

//GLOBAL VARS
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error'); // Passport's default error flash
    next();
});

//ROUTES
app.use('/', require('./routes/index'));

//USERS
app.use('/users', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));