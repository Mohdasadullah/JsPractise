function calculateElectricityBill(units, timeOfDay) {
    let rate = units > 300 ? 3 : units > 100 ? 4 : 5;
    if (timeOfDay >= 20 || timeOfDay < 8) {
        rate *= 1.1;
    }
    return units * rate;
}