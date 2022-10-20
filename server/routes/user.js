const router = require('express').Router();
const { logout, deleteAccount, getUserLoans } = require('../controllers/user.controller');

/**
 * ----- Getting User Loans -----
 */
router.get('/user_loans', getUserLoans);

/**
 * ---- Delete User Account ----
 */
router.delete('/delete', deleteAccount);

/**
 * ---- User Logout ----
 */
router.get('/logout', logout);

module.exports = router;