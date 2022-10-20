const User = require('../models/User');
const Loan = require('../models/Loan');
const { getLoansByUserId } = require('../services/loanService');


/**
 * ----- Loans By User ----
 * @param {*} req 
 * @param {*} res 
 */
const getUserLoans = async function (req, res) {
    const { _id: userId } = req.user;

    try {
        const loans = await getLoansByUserId(userId);

        if (loans.length > 0) {
            res.status(200).json({
                success: true,
                loans
            });
        }
    } catch (error) {
        res.status(500).json({ success: false, err: error.message });
    }
};

/**
 * ---- Deleting the User ----
 * @param {*} req 
 * @param {*} res 
 */
const deleteAccount = async function (req, res) {
    const { _id: userId } = req.user;

    try {
        const deletedUser = await User.findByIdAndDelete({ _id: userId });
        if (!deletedUser) throw new Error("Can't Delete This User");

        // console.log('Deleted User -- ', deletedUser);

        const deleteUsersLoan = await Loan.deleteMany({ userId: deletedUser._id });
        if (!deleteUsersLoan) throw new Error("Can't Delete This Users Releted Data!");

        // console.log('Deleted Users Loan -- ', deleteUsersLoan);

        res.status(200).json({
            deleted: true,
            message: "User Deleted Successfully!"
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * ---- User Logout ----
 * @param {*} req 
 * @param {*} res 
 */
const logout = function (req, res) {
    // console.log(req.user.schema.methods.deleteToken);

    req.user.deleteToken(function (err) {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            isAuth: false,
            message: 'Logged-Out, session deleted!'
        });
    });
};

module.exports = {
    getUserLoans,
    logout,
    deleteAccount
};