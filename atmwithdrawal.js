function atmwithdrawal(balance,amount,pin,enteredPin){
    if(enteredPin!=pin){
        return "Invalid Pin";
    }
    if(amount>balance){
        return "Insufficient Balance";
    }
    if(amount%100!==0){
        return "Enter amount in multiple of 100";
    }
    balance-=amount;
    return `withdrawal successful. Remaining balance: ${balance}`;
}