const router = require('express').Router();
const { loanRequest, loanAcceptance, allLoans } = require('../controllers/loan.controller');

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