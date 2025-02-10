function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "VIP" || (planType === "Premium" && wantsDietPlan)) {
        return "VIP ($80/month)";
    } else if (planType === "Premium" || (planType === "Basic" && wantsTrainer)) {
        return "Premium ($50/month)";
    } else {
        return "Basic ($20/month)";
    }
}