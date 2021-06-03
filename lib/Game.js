const inquirer = require("inquirer");
const chalk = require("chalk");
const Word = require("./Word");
const words = require("./words");



class Game {

    constructor() {
        this.guessesLeft = 0;
    }

    play() {
        this.guessesLeft = 10;
        this.nextWord();
    }

    nextWord() {
        const randWord = words[Math.floor(Math.random() * words.length)];
        this.currentWord = new Word(randWord);
        console.log("\n" + this.currentWord.toString() + "\n");
        const game = new Game();
        console.log(game.guessesLeft);
        this.makeGuess();
    }


    makeGuess() {
        this.askForLetter().then(() => {

            if (this.guessesLeft < 1) {
                console.log(
                    'No guesses left! Word was: "' +
                    this.currentWord.getSolution() +
                    '"\n'
                );
                this.askToPlayAgain();


            } else if (this.currentWord.guessedCorrectly()) {
                console.log("You got it right! Next word!");
                this.guessesLeft = 10;
                this.nextWord();


            } else {
                this.makeGuess();
            }
        });
    }


    askToPlayAgain() {
        inquirer
            .prompt([{
                type: "confirm",
                name: "choice",
                message: "Play Again?"
            }])
            .then(val => {

                if (val.choice) {
                    this.play();
                } else {
                    this.quit();
                }
            });
    }


    askForLetter() {
        return inquirer
            .prompt([{
                type: "input",
                name: "choice",
                message: "Guess a letter!",

                validate: val => /[a-z1-9]/gi.test(val),
            }])
            .then(val => {

                const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
                if (didGuessCorrectly) {
                    console.log(chalk.green("\nCORRECT!!!\n"));


                } else {
                    this.guessesLeft--;
                    console.log(chalk.red("\nINCORRECT!!!\n"));
                    console.log(this.guessesLeft + " guesses remaining!!!\n");
                }

                console.log(this.currentWord.toString() + "\n");
            });
    }


    quit() {
        console.log("\nGoodbye!");
        process.exit(0);
    }
}

module.exports = Game;