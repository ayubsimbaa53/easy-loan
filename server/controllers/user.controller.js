const User = require('../models/User');
const Loan = require('../models/Loan');

/**
 * ---- Deleting the User ----
 * @param {*} req 
 * @param {*} res 
 */
const deleteAccount = async function (req, res) {
    const { userId } = req.query;

    try {
        const deletedUser = await User.findByIdAndDelete({_id: userId});
        if (!deletedUser) throw new Error({deleted: false, message: "Can't Delete!"});

        console.log('Deleted User -- ', deletedUser);

        const deleteUsersLoan = await Loan.deleteMany({ userId: deletedUser._id });
        if (!deleteUsersLoan) throw new Error({deleted: false, message: "Can't Delete Loans Of This User!"});

        console.log('Deleted Users Loan -- ', deleteUsersLoan);

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
    logout,
    deleteAccount
};