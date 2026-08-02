// This module exports middleware functions used to protect routes and control access.
module.exports = {
    // Place it on any route you want only logged-in users to access.
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated) {
          return next();
        }
        // User is NOT logged in → show a flash message and redirect them to the login page
        req.flash('error_msg', 'Please log in to view this resource');
        res.redirect('/user/login')
    }
}
