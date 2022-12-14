const Loan = require('../models/Loan');
const { getCompanyById } = require("../services/companyService");
const { updateBalance } = require("../services/userService");
const { getWithPercentage } = require('../services/percentageService');
const { getMinutesFromNow, getMonthFromNow } = require('../services/getTimesService');
const { getFormatedDate, getFormatedTime } = require('../services/dateFormatService');
const { addMinutes, isAfter, addMonths } = require('date-fns');


/**
 * ----- Checking the Loan Status -----
 * @param {*} req 
 * @param {*} res 
 */
const checkLoanStatus = async function (req, res) {
    const { loanId } = req.query;
    const { _id: userId } = req.user;

    try {
        const loan = await Loan.findOne({ _id: loanId, userId, status: 'RUNNING' });

        const started = addMonths(new Date(loan.createdAt), loan.payDuration);
        const isTimeOver = isAfter(new Date(), started);

        if (isTimeOver){
            loan.status = 'FINISHED';
        }
        await loan.save();
        
        res.status(200).json({
            success: true,
            loan
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * ----- Make Dispatching the Loan ----
 * @param {*} req 
 * @param {*} res 
 */
const payLoan = function (req, res) {
    
};


/**
 * ---- Make Loan Request ----
 * @param {*} req 
 * @param {*} res 
 */
const loanRequest = function (req, res) {
    const loan = new Loan(req.body);

    // Make userId Update With LoggedIn User..
    loan.userId = req.user._id;

    loan.save((err, result) => {
        if (err) return res.status(400).json({ error: err.message });
        res.status(200).json(result);
    });
};

/**
 * ---- Make Loan Acceptance ----
 * @param {*} req 
 * @param {*} res 
 */
const loanAcceptance = async function (req, res) {
    const { id, request } = req.query;

    if (request === 'ACCEPTED') {
        try {
            const loan = await Loan.findById({ _id: id });
            const { amounts, companyId, status } = loan;
            const { offersRate } = await getCompanyById(companyId);

            if (status === 'NULL') {
                // Update the amounts with company interest..
                const percentageAmount = getWithPercentage(parseFloat(amounts), parseFloat(offersRate));
                const sumWithPercentageAmount = amounts + percentageAmount;
                loan.amounts = sumWithPercentageAmount;

                // Update the User Balance With Loan..
                updateBalance(loan.userId, sumWithPercentageAmount);

                // Update something else..
                loan.request = "ACCEPTED";
                loan.status = "RUNNING";

                // Let gets Minutes from now when acceptance is okay..
                const payDuration = loan.payDuration;
                const haveToPayIn = getMonthFromNow(payDuration);
                const formatedHaveToPayIn = getFormatedDate(haveToPayIn);
                loan.expiredDate = formatedHaveToPayIn;

                // Let's Working On NextPay Month Date..
                const nextPay = loan.nextPayRound;
                const haveToPayNextIn = getMonthFromNow(nextPay);
                const formatedHaveToPayNextIn = getFormatedDate(haveToPayNextIn);
                loan.nextPayDate = formatedHaveToPayNextIn;

                // Pay To Next Month..
                /**
                 * (Total Amount - Month Duration)
                 */
                const payPerMonth = amounts / payDuration;
                loan.payPerMonth = payPerMonth.toFixed(2);

                console.log('Amounts -- ', amounts, ' Month -- ', payDuration);
                console.log('Pay Per Month -- ', payPerMonth);
            }

            loan.save((error, docs) => {
                if (error) throw error;
                res.status(200).json({
                    success: true,
                    docs
                });
            });

        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    if (request === 'DENIED') {
        Loan.findByIdAndUpdate({ _id: id }, { request: request }, { new: true })
            .then(loan => {
                res.status(200).json({
                    success: true,
                    loan
                });
            })
            .catch(error => {
                res.status(400).json({
                    success: false,
                    error
                });
            });
    }
}

/**
 * ---- See All Loans -----
 * @param {*} req 
 * @param {*} res 
 */
const allLoans = async function (_req, res) {
    try {
        const loans = await Loan.find({}).sort({createdAt: -1});
        if (!loans.length) throw new Error("Loans not found");
        res.status(200).json({
            success: true,
            loans
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    checkLoanStatus,
    payLoan,
    loanRequest,
    loanAcceptance,
    allLoans
};