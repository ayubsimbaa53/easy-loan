const router = require('express').Router();
const { makeCompany, getLoansOfCompany } = require('../controllers/company.controller');

/**
 * ---- Make Company ----
 */
router.post('/make', makeCompany);

/**
 * ---- Get Company Loans ----
 */
router.get('/company_loans', getLoansOfCompany);

module.exports = router;