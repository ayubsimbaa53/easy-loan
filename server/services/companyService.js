const Company = require('../models/Company');

/**
 * ----- Getting The Company By ID -----
 * @param {String} companyId 
 * @returns 
 */
const getCompanyById = async function (companyId) {
    const company = await Company.findById({ _id: companyId });
    return company;
};

module.exports = {
    getCompanyById
};