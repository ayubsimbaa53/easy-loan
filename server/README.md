### **⇒ Requirements :**

- Sell lottery ticket
- Update lottery ticket
- Delete lottery ticket
- Get all tickets
- Get ticket by id
- Bulk buy (user can buy multiple ticket at a time)
- Raffle draw

### ⇒ Ticket Model :

- number (unique)
- username
- price
- timestamp

### ⇒ Routes :

- /tickets/sell — Create Ticket — [POST]
- /tickets/bulk — Bulk Sell Tickets — [POST]
- /tickets — Find all Tickets — [GET]
- /tickets/t/:ticketId — Find Individual Ticket — [GET]
- /tickets/t/:ticketId — Update Ticket By Id — [PATCH]
- /tickets/t/:ticketId — Delete Ticket By Id — [DELETE]
- /tickets/u/:username — Find Ticket By Username — [GET]
- /tickets/u/:username — Update Ticket By Username — [PATCH]
- /tickets/u/:username — Delete Tickets By Username — [DELETE]
- /tickets/draw — Make Raffle Draw — [GET]