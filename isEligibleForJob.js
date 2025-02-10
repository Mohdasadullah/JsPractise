function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree";
}

function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        return orderAmount * 0.9;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        return orderAmount;
    }
    return orderAmount;
}