// Loan Modal...
const mongoose = require('mongoose');

// Loan Schema..
const loanSchema = mongoose.Schema({
    amounts: { type: Number, required: true },
    username: { type: String, required: false },
    phone: { type: String, required: false },
    userId: { type: String, required: true },
    request: { type: String, default: 'PENDING', enum: ['PENDING', 'ACCEPTED', 'DENIED'] },
    status: { type: String, default: 'NULL', enum: ['NULL', 'RUNNING', 'FINISHED'] },
    payDuration: { type: Number, required: false, default: 6 },
    requestedTo: { type: String, required: false },
    companyId: { type: String },
    nextPayDate: { type: Number, default: 1 },
}, {
    timestamps: true
});

// Loan Model..
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;