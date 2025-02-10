function trafficLightControl(density) {
    if (density === "Heavy Traffic") {
        return 60;
    } else if (density === "Moderate Traffic") {
        return 40;
    } else if (density === "Light Traffic") {
        return 20;
    } else {
        return "Invalid traffic density";
    }
}