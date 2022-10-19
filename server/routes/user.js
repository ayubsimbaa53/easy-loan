const router = require('express').Router();
const { logout, deleteAccount } = require('../controllers/user.controller');


/**
 * ---- Delete User Account ----
 */
router.delete('/delete', deleteAccount);

/**
 * ---- User Logout ----
 */
router.get('/logout', logout);

module.exports = router;