// User Model..
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const config = require('../config/config').get(process.env.NODE_ENV);
const SALT_I = 10;

// user Schema..
const userSchema = mongoose.Schema({
    firstname: { type: String, required: false, maxLength: 100 },
    lastname: { type: String, required: false, maxLength: 100 },
    profilePicture: { type: String, required: false },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 7 },
    age: { type: Number, required: true },
    balance: { type: Number, default: 0.00 },
    loans: { type: String },
    token: { type: String }
}, {
    timestamps: true
});


// Let's Impementing the in database functionalities..
// Schema Middleware function to Hashing Password..
userSchema.pre('save', async function (next) {
    var user = this;

    if (user.isModified('password')) {
        try {
            // Make Salt..
            const salt = await bcrypt.genSalt(SALT_I);

            // Make Hash The Password..
            const hash = await bcrypt.hash(user.password, salt);

            // Restore / Update Existing password to Hash..
            user.password = hash;
            next();

        } catch (error) {
            next(error);
        }

    } else {
        next();
    }
});


// Schema Method to Comapare Password to Register Password..
userSchema.methods.comparePassword = async function (candidatePassword, cb) {
    var user = this;

    try {
        // Comparing Password..
        const matchedPassword = await bcrypt.compare(candidatePassword, user.password);
        cb(null, matchedPassword);

    } catch (error) {
        cb(error)
    }
};

// Schema Method to Generate token for cookie when user login..
userSchema.methods.ganarateToken = function (cb) {
    var user = this;
    var token = JWT.sign(user._id.toHexString(), config.SECRET);
    user.token = token;

    user.save(function (err, user) {
        if (err) return cb(err);
        cb(null, user);
    });
};


// Schema Method to Generate Token For Cookie When User Login..
userSchema.statics.findByToken = async function (token, cb) {
    var user = this;

    try {
        // Decode Token For ID..
        const decodeToken = JWT.verify(token, config.SECRET);

        // Find User By Decoded Token ID..
        const findUser = await user.findOne({ _id: decodeToken, token: token });
        cb(null, findUser);

    } catch (error) {
        cb(error);
    }
};


// Schema Method for Delete Token..
userSchema.methods.deleteToken = function (cb) {
    var user = this;

    // console.log("---- I am Schema Method Of Delete Token Here ----");

    // Make Update To Remove The Token From User Doc..
    user.updateOne({ $unset: { token: 1 } }, function (err) {
        if (err) return cb(err);
        cb(null);
    });
};


// user Model..
const User = mongoose.model('User', userSchema);

module.exports = User;