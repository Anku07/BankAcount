import { BankAccount } from "./data.js"
//create an instance of constructor
let bank = new BankAccount(987654321, 20000)
let bank2 = new BankAccount(123456789, 80000)
//status of deposit and withdraw
let sbi = bank.deposit(80000);
let axis = bank2.withdraw(90000);
//display the status
console.log(sbi);
console.log(axis);