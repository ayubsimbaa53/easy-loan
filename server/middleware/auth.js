// import Model..
const User = require('../models/User');

// auth middleware..
const auth = function (req, res, next) {
    const token = req.cookies.auth;

    User.findByToken(token, function (err, user) {
        if (err) return res.json({ isAuth: false, error: true, msg: err.message });
        if (!user) return res.json({ isAuth: false, error: true, msg: 'User not found!' });

        req.token = token;
        req.user = user;
        next();
    });
}

module.exports = auth;