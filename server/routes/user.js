const router = require('express').Router();
// const emailChecker = require('../middleware/emailCheck');
const { login, register, forgotPassword, logout } = require('../controllers/auth.controller');


/**
 * ---- User Logout ----
 */
 router.get('/logout', logout);

 module.exports = router;