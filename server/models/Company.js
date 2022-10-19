const mongoose = require('mongoose');

// Company Schema..
const companySchema = mongoose.Schema({
    name: { type: String },
    logo: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    offersRate: { type: Number },
    loans: { type: String }
}, {
    timestamps: true
});

// Company Model..
const Company = mongoose.model('Company', companySchema);

module.exports = Company;