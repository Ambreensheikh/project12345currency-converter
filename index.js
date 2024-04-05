#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EURO: 299.5,
    YEN: 1.86,
    SAUDIRIYAL: 73.3,
    YUAN: 38.5,
    PKR: 280
};
let userAnswer = await inquirer.prompt([{
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EURO", " YEN", "SAUDIRIYAL", "YUAN", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EURO", " YEN", "SAUDIRIYAL", "YUAN", "PKR"]
    }, {
        name: "amount",
        message: "Enter Your amount",
        type: "Number",
    }
]);
let fromAmount = Currency[userAnswer.from];
let toAmount = Currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
let number = Math.round(convertedAmount);
//console.log(fromAmount);
//console.log(toAmount);
//console.log(amount);
console.log(convertedAmount);
