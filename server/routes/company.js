const router = require('express').Router();
const { makeCompany, loanAcceptance } = require('../controllers/company.controller');

/**
 * ---- Make Company ----
 */
router.post('/make', makeCompany);

/**
 * ---- Loan Accpetance ----
 */
router.post('/acceptance', loanAcceptance);

module.exports = router;