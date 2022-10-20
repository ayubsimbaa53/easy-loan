const { format, getMinutes } = require('date-fns');

/**
 * ----- Get The Formated Date -----
 * @param {String} unformatedDate 
 * @returns 
 */
const getFormatedDate = function (unformatedDate) {
    return format(unformatedDate, 'dd-MMMM-yyyy');
};

/**
 * ---- Get The Formated Time ----
 * @param {String} unformatedTime 
 * @returns 
 */
const getFormatedTime = function (unformatedTime) {
    return getMinutes(unformatedTime);
};

module.exports = {  
    getFormatedDate,
    getFormatedTime
};