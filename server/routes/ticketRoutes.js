// const router = require('express').Router();
// const { 
//     ticketById, 
//     updateTicket, 
//     deleteTicket, 
//     ticketByUsername,
//     sellTicket,
//     bulkTicket,
//     drawTicket,
//     allTickets,
//     deleteByUsername
// } = require('../controllers/ticket');


// // Create Ticket..
// router.post('/sell', sellTicket);

// // Bulk Create Tickets..
// router.post('/bulk', bulkTicket);

// // Make Draw For Winner..
// router.get('/draw', drawTicket);

// // Get All Tickets..
// router.get('', allTickets);

// // Another Way of defining the Routes...
// // ... with ticketId ops.
// router.route('/t/:ticketId')
//     .get(ticketById)
//     .patch(updateTicket)
//     .delete(deleteTicket);

// // ... with username ops.
// router.route('/u/:username')
//     .get(ticketByUsername)
//     .patch(function(){})
//     .delete(deleteByUsername);

// module.exports = router;