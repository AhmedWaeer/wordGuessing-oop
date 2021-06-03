

# Word Guess Cli


The completed game meets the following criteria:

The completed game should be able to receive user input using the inquirer or prompt npm packages.

the solution has three main files:

Letter.js: Contains a class, Letter. This constructor is able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

A string value to store the underlying character for the letter

A boolean value that stores whether that letter has been guessed yet

A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

Word.js: Contains a class, Word, that depends on the Letter class. This is used to create an object representing the current word the user is attempting to guess. That means the class should define:

An array of new Letter objects representing the letters of the underlying word

A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

index.js: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word class to store it

Prompts the user for each guess and keeps track of the user's remaining guesses

Letter.js should not require any other files.

Word.js should only require Letter.js

