function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let price = 300;
    if (classType === "Business") {
        price += 200;
    } else if (classType === "First") {
        price += 500;
    }
    if (luggageWeight > 20) {
        price += Math.ceil((luggageWeight - 20) / 10) * 50;
    }
    if (isStudent) {
        price *= 0.85;
    } else if (isSenior) {
        price *= 0.90;
    }
    return price;
}
