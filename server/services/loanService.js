const Loan = require('../models/Loan');

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
    getLoansByUserId
};