const router = require('express').Router();
const { loanRequest, loanAcceptance, allLoans, checkLoanStatus } = require('../controllers/loan.controller');

/**
 * ---- Check Loan Status -----
 */
router.get('/status', checkLoanStatus);

/**
 * ---- Loan Request ----
 */
router.post('/request', loanRequest);   

/**
 * ---- Loan Acceptance ----
 */
router.post('/acceptance', loanAcceptance);

/**
 * ---- See all loans ----
 */
router.get('/all', allLoans);

module.exports = router;