const Loan = require('../models/Loan');
const Company = require('../models/Company');
const { getWithPercentage } = require('../services/percentageService');

/**
 * ---- Make Loan Request ----
 * @param {*} req 
 * @param {*} res 
 * @param {*} _next 
 */
const loanRequest = function (req, res) {
    const loan = new Loan(req.body);

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
            let loan = await Loan.findById({ _id: id });
            let { amounts, companyId } = loan;
            let { offersRate } = await Company.findById({ _id: companyId });

            // Update the amounts with company interest..
            const percentageAmount = getWithPercentage(parseFloat(amounts), parseFloat(offersRate));
            const sumWithPercentageAmount = amounts + percentageAmount;
            loan.amounts = sumWithPercentageAmount;

            // Update something else..
            loan.status = "RUNNING";
            console.log(loan);


            loan.save((error, docs) => {
                if (error) throw error;
                res.status(200).json({
                    success: true,
                    docs
                });
            });

        } catch(error){
            res.status(400).json({
                success: false,
                error
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
const allLoans = async function (req, res) {

    try {
        const loans = await Loan.find({});
        if (!loans) throw new Error("Loans not found");
        res.status(200).json({
            success: true,
            loans
        });

    } catch(error) {
        res.status(500).json({success: false, message: error.message});
    }
};

module.exports = {
    loanRequest,
    loanAcceptance,
    allLoans
};