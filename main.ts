
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { messge: "Enter your first number", type: "number", name: "firstNumber" },
    { messge: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select one operator to perform action",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
// CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBRACTION") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else
    ("Please select valid operator");
