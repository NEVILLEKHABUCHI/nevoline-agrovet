exports.isAuthenticated = (req, res, next) => {
    if(req.session.user){
        next(); //  User is authenticated, proceed to the next middleware/route handler
    }else{
        // Send an error message
        req.flash('error', 'Your session has expired. Please Log in again');
        res.redirect('/auth/login'); //Redirect to login page if not authenticated
    }
}