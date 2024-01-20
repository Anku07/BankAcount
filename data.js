class BankAccount {
    constructor(accountNumber, balance) {
        this.BankAccountNumber = accountNumber,
            this.BankBalance = balance
    }
    deposit(amount) {
        this.BankBalance = this.BankBalance + amount
        return {
            newBalance: this.BankBalance
        }
    }
    withdraw(amount) {
        if (amount  <= this.BankBalance) {
            this.BankBalance = this.BankBalance - amount
           console.log("balance after withdraw : " + this.BankBalance )
        } else {
          
           console.log("insuffiecient balance")
        }
     }
}
export { BankAccount }