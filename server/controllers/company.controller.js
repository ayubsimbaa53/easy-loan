const Company = require('../models/Company');
const { getLoansByCompanyId } = require('../services/loanService');

/**
 * ---- Make Company ----
 * @param {*} req 
 * @param {*} res 
 */
const makeCompany = (req, res) => {
    const company = new Company(req.body);

    company.save((err, result) => {
        if (err) return res.status(400).json({ error: err.message });
        res.status(201).json(result);
    });
};

/**
 * ---- Get Company Loans ----
 * @param {*} req 
 * @param {*} res 
 */
const getLoansOfCompany = async (req, res) => {
    const { companyId } = req.query;

    try {
        const companyLoans = await getLoansByCompanyId(companyId);
        if (!companyLoans.length) throw new Error("No Loans Here!");
        res.status(200).json({ success: true, loans: companyLoans });

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    makeCompany,
    getLoansOfCompany
};