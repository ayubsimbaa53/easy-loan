const User = require('../models/User');

/**
 * ---- Getting User By ID ----
 * @param {String} userId 
 */
const getUserById = async function (userId) {
    const user = await User.findById({ _id: userId });
    return user;
}

/**
 * ----- Update The User's Balance With Loan Acceptance ----
 * @param {String} userId 
 */
const updateBalance = async function (userId, newBalance) {
    // const updateUser = await User.findByIdAndUpdate({ _id: userId }, { balance: newBalance });
    const user = await User.findById({ _id: userId });
    user.balance = newBalance;
    await user.save();
}

module.exports = {
    getUserById,
    updateBalance
};