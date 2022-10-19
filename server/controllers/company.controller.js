const Company = require('../models/Company');
const Loan = require('../models/Loan');

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
 * ------ Accepting Loan By Company ------
 * @param {*} req 
 * @param {*} res 
 */
const loanAcceptance = (req, res) => {
    // loan acceptance...
    
};

module.exports = {
    makeCompany,
    loanAcceptance
};