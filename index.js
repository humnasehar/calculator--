#! /usr/bin/env node
import inquirer from "inquirer";
const userInput = await inquirer.prompt([{ message: "Enter a  first number:", type: "number", name: "firstNumber" },
    { message: "Enter a secondnumber:", type: "number", name: "secondNumber" },
    {
        message: "Select just one operator to perform an action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (userInput.operator === "Addition") {
    console.log(userInput.firstNumber + userInput.secondNumber);
}
else if (userInput.operator === "Subtraction") {
    console.log(userInput.firstNumber - userInput.secondNumber);
}
else if (userInput.operator === "Multiplication") {
    console.log(userInput.firstNumber * userInput.secondNumber);
}
else if (userInput.operator === "Division") {
    console.log(userInput.firstNumber / userInput.secondNumber);
}
else {
    console.log("please select a valid operator");
}
