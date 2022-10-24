const Loan = require('../models/Loan');

/**
 * ----- Getting the Loans Of Company -----
 * @param {String} companyId 
 * @returns 
 */
const getLoansByCompanyId = async function (companyId) {
    const loans = await Loan.find({ companyId: companyId });
    return loans;
};

/**
 * ----- Getting the Loans Of User ----
 * @param {String} userId 
 * @returns 
 */
const getLoansByUserId = async function (userId) {
    const loans = await Loan.find({ userId: userId });
    return loans;
};

module.exports = {
    getLoansByCompanyId,
    getLoansByUserId
};