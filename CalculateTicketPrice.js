function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) {
        price *= 0.8;
    }
    if (age > 60) {
        price *= 0.7;
    } else if (age < 12) {
        price *= 0.6;
    }
    return price;
}