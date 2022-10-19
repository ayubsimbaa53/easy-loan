const router = require('express').Router();
// const emailChecker = require('../middleware/emailCheck');
const { login, register, forgotPassword, logout } = require('../controllers/auth.controller');

/**
 * ---- Login User ----
 */
router.post('/login', login);

/**
 * ---- Register User ----
 */
router.post('/register', register);

/**
 * ---- Forgot Passsord ----
 */
router.get('/forgot_password', forgotPassword);

module.exports = router;