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
        // Make Salt..
        const salt = await bcrypt.genSalt(SALT_I);
        if (!salt) return next({ message: 'Failed To Generate Salt!' });

        // Make Hash The Password..
        const hash = await bcrypt.hash(user.password, salt);
        if (!hash) return next({ message: 'Failed To Hashing Password!' });

        // Restore / Update Existing password to Hash..
        user.password = hash;
        next();

    } else {
        next();
    }
});


// Schema Method to Comapare Password to Register Password..
userSchema.methods.comparePassword = async function (candidatePassword, cb) {
    var user = this;

    // Comparing Password..
    const matchedPassword = await bcrypt.compare(candidatePassword, user.password);
    if (!matchedPassword) return cb({ message: "Wrong Password!" });
    cb(null, matchedPassword);
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

    // Decode Token For ID..
    const decodeToken = await JWT.verify(token, config.SECRET);
    if (!decodeToken) return cb({ message: "Failed To Decode The Password!" });

    // Find User By Decoded Token ID..
    const findUser = user.findOne({ _id: decodeToken, token: token });
    if (!findUser) return cb({ message: "User Not Found With This Token!" });
    cb(null, findUser);
};


// Schema Method for Delete Token..
userSchema.methods.deleteToken = function (cb) {
    var user = this;

    // Make Update To Remove The Token From User Doc..
    user.updateOne({ $unset: { token: 1 } }, function (err) {
        if (err) return cb(err);
        cb(null);
    });
};


// user Model..
const User = mongoose.model('User', userSchema);

module.exports = User;