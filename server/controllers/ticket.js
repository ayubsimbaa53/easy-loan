// const db = require('../db/db');

// // Ticket Controller..
// exports.ticketById = function (req, res) {
//     const ticketId = req.params.ticketId;
//     const ticket = db.findById(ticketId);
//     res.status(200).json(ticket);
// };

// // Update Ticket..
// exports.updateTicket = function (req, res) {
//     const ticketId = req.params.ticketId;
//     const updatedTicket = db.updateById(ticketId, req.body);

//     res.status(200).json({
//         message: 'Updated Successfully',
//         updatedTicket
//     });
// };

// // Delete Ticket..
// exports.deleteTicket = function (req, res) {
//     const ticketId = req.params.ticketId;
//     db.deleteById(ticketId);
//     res.status(203).send();
// };

// // Get Ticket by Username..
// exports.ticketByUsername = function (req, res) {
//     const username = req.params.username;

//     console.log('Username here -- ', username);

//     const tickets = db.findByUsername(username);
//     res.status(200).json(tickets);
// };

// // Create / Sell Ticket..
// exports.sellTicket = function (req, res) {
//     const { username, price } = req.body;
//     const ticket = db.create(username, price);

//     res.status(201).json({
//         message: 'Ticket Created Successfully',
//         ticket
//     });
// };

// // Bulk Create Ticket..
// exports.bulkTicket = function (req, res) {
//     const { username, price, quantity } = req.body;
//     const tickets = db.bulkCreate(username, price, quantity);

//     res.status(201).json({
//         message: 'Bulk Ticket Created Successfully',
//         tickets
//     });
// };

// // Draw Ticket..
// exports.drawTicket = function (req, res) {
//     const winnerCount = req.query.wc ?? 3;
//     const winners = db.draw(winnerCount);
//     res.status(200).json(winners);
// };

// // Get All Tickets..
// exports.allTickets = function (req, res) {
//     const tickets = db.find();
//     res.status(200).json(tickets);
// };

// // Delete Ticket By Username..
// exports.deleteByUsername = function(req, res){
//     const username = req.params.username;
//     db.deleteTicketByUsername(username);
//     res.status(203).send();
// };