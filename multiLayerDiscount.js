
function ticketQuantity(tickets) {
    const fistPrice = 100;
    const secondPrice = 90;
    const thirdPrice = 70;


    if (tickets <= 100) {
        const price = fistPrice * tickets;
        return price;
    } else if (tickets <= 200) {
        const price = fistPrice * 100;
        const restPrice = tickets - 100;
        const totalRestPrice = restPrice * secondPrice;
        const totalPrice = price + totalRestPrice;
        return totalPrice;
    } else {
        const price = fistPrice * 100;
        const second100 = secondPrice * 100
        const restPrice = tickets - 200;
        const totalRestPrice = restPrice * thirdPrice;
        const totalPrice = price + second100 + totalRestPrice;
        return totalPrice;
    }
}

const totalTicketsPrice = ticketQuantity(220)
console.log(totalTicketsPrice);