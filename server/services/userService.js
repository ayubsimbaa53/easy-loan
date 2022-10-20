const User = require('../models/User');

/**
 * ---- Getting User By ID ----
 * @param {String} userId 
 */
const getUserById = async function (userId) {
    const user = await User.findById({ _id: userId });
    return user;
}

module.exports = {
    getUserById
};