class Letter {
    constructor(char) {
        r
        this.visible = !/[a-z1-9]/i.test(char);
        this.char = char;
    }

    toString() {
        if (this.visible === true) {
            return this.char;
        }
        return "_";
    }

    getSolution() {
        return this.char;
    }


    guess(charGuess) {
        if (charGuess.toUpperCase() === this.char.toUpperCase()) {
            this.visible = true;
            return true;
        }

        return false;
    }
}

module.exports = Letter;