function calculateFinalAmount(orderAmount) {
    let discount = 0;
    
    if (orderAmount > 1000) {
        discount = 0.20;
    } else if (orderAmount >= 500) {
        discount = 0.10;
    }
    
    let discountedAmount = orderAmount - (orderAmount * discount);
    
    let shippingCost = discountedAmount > 50 ? 0 : 10;
    
    return discountedAmount + shippingCost;
}