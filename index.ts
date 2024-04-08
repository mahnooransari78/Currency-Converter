#! /usr/bin/env node

import inquirer from "inquirer";

const currencyRates :any ={
    USD : 1,                //BASE CURRENCY
    EUR: 0.91,
    JPY :151.81,
    CAD :1.35,
    KRW : 1355,
    PKR : 278,
};

let answer = await inquirer.prompt(
    [
     {
        name : "from",
        message : " Enter from currency",
        type :"list",
        choices :["USD","EUR","JPY","CAD","KRW","PKR"],
     },
     {
        name :"to",
        message : "Enter To currency",
        type : "list",
        choices :["USD","EUR","JPY","CAD","KRW","PKR"],
     },
     {
        name : "amount",
        message :"Enter your amount",
        type : "number",
     }
    ]
);
// console.log(answer);
let fromAmount = currencyRates[answer.from]

let toAmount = currencyRates[answer.to]

let amount = answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount 
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
console.log( convertedAmount);

