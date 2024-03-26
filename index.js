import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number:"
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a right number.");
}
else {
    console.log("You guessed a wrong number.");
}
