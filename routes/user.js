const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// USERS MODEL
const User = require('../models/User');

// LOGIN PAGE
router.get('/login', (req, res) => res.render('login'));

// REGISTER PAGE
router.get('/register', (req, res) => res.render('register'));

// REGISTER HANDLE
router.post('/register', async (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // 1. Validate fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields' });
  }

  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password should be at least 6 characters' });
  }

  // Render form with errors if validation fails
  if (errors.length > 0) {
    return res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  }

  try {
    // 2. Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      errors.push({ msg: 'Email is already registered' });
      return res.render('register', {
        errors,
        name,
        email,
        password,
        password2
      });
    }

    // 3. Hash password and save new user
    const newUser = new User({ name, email, password });
    
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    await newUser.save();
    
    // Redirect to login on success
    req.flash('success_msg', 'You are now registered and can log in');
    res.redirect('/users/login');

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//LOGIN HANDLE
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/Users/login',
    failureFlash: true
  })(req, res, next);
});

// LOGOUT HANDLE
router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
  });
});

module.exports = router;