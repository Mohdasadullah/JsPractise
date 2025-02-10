function calculateGrade(marks, attendance) {
    if (attendance > 90) {
        marks += 5;
    }
    
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}