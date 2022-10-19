const router = require('express').Router();
const LoanRoutes = require('../routes/loan');
const CompanyRoutes = require('../routes/company');
const AuthRoutes = require('../routes/auth');
const UserRoutes = require('../routes/user');

// Middlewares..
const auth = require('../middleware/auth');

// Address Of API v1..
const API_V1 = "/api/v1";

// Use Ticket Routes..
// router.use('/api/v1/tickets', require('../routes/ticketRoutes'));
router.use(`${API_V1}/loan`, auth, LoanRoutes);
router.use(`${API_V1}/company`, auth, CompanyRoutes);
router.use(`${API_V1}/auth`, AuthRoutes);
router.use(`${API_V1}/user`, auth, UserRoutes);


router.get('/health', (_req, res) => {
    res.status(200).json({ message: 'Success' });
});

module.exports = router;
