// Add event listener
function handleNumberChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + 'Input');
    const newTicket = parseInt(ticketInput.value);
    let totalTicket = newTicket;
    if (isIncrease == true) {
        totalTicket = newTicket + 1;
    }
    if (isIncrease == false && totalTicket > 0) {
        totalTicket = newTicket - 1;
    }
    document.getElementById(ticket + 'Input').value = totalTicket;
    calculateTotal();
}

// calculate total cost
function calculateTotal() {
    const firstClassTicket = getTicketNumber('firstClass')
    const economyTicket = getTicketNumber('economy')

    const cost = firstClassTicket * 150 + economyTicket * 100;
    document.getElementById('subTotal').innerText = '$' + cost;

    const vat = cost * 0.1; // If the number was decimal then I would use math.round
    document.getElementById('vat').innerText = '$' + vat;

    const totalCost = cost + vat;
    document.getElementById('totalCost').innerText = '$' + totalCost;
}

// get ticket number
function getTicketNumber(ticket) {
    const ticketInput = document.getElementById(ticket + 'Input');
    const newTicket = parseInt(ticketInput.value);
    return newTicket;
}

// Confirming ticket with alert.
function confirmTicket() {
    const totalCost = document.getElementById('totalCost').innerText;
    // const totalCost = ;
    if (totalCost > '$'+0) {
        alert('We confirm your ticket. We wish you a happy journey. Stay with us, Thank you.');
    } else {
        alert('Your ticket input is empty, Please put your ticket quantity and go for a safe journey.');
    }   
}
