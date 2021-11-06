const { expect } = require("chai");

module.exports = function toReadable (number) {

let readableNumber = {

    0: { num: 'zero' },
    1: { num: 'one' },
    2: { num: 'two' },
    3: { num: 'three',
        word: 'thir'},
    4: { num: 'four',
        word: 'four',
        exceptionWord: 'for'},
    5: { num: 'five',
        word: 'fif'},
    6: { num: 'six',
        word: 'six'},
    7: { num: 'seven',
        word: 'seven'},
    8: { num: 'eight',
        word: 'eigh'},
    9: { num: 'nine',
        word: 'nine'}, 
    10: { num: 'ten'},
    11: { num: 'eleven' },
    12: { num: 'twelve' },
    20: { num: 'twenty'},

    teen: 'teen',
    ty: 'ty',
    hundred: 'hundred',

    searchNumberUnder100: function (number) {
        if(number >= 0 && number <= 12 || number === 20) {
            return this[number].num;
        } 
        
        else if (number > 12 && number < 20) {
            return this[number - 10].word + this.teen;
        } 
        
        else if (number > 20 && number < 30) {
            return this[20].num + " " + this[number - 20].num;
        }

        else if (number >= 30 && number <40 || number >= 50 && number <100) {
            
            if (Number.isInteger(number / 10)) {
                return this[number / 10].word + this.ty;
            } 

            else {
                return this[Math.floor(number / 10)].word + this.ty + " " + this[number - (Math.floor(number / 10) * 10)].num;
            }
        }

        else if (number >= 40 && number <= 49) {

            if (Number.isInteger(number / 10)) {
                return this[number / 10].exceptionWord + this.ty;
            } 
            
            else {
                return this[Math.floor(number / 10)].exceptionWord + this.ty + " " + this[number - (Math.floor(number / 10) * 10)].num;
            }
        }
    }

}

function searchNumber(number) {
        
    if (number < 100) {
      return  readableNumber.searchNumberUnder100(number);
    }
    
    else if (number % 100 === 0) {
        return readableNumber[number / 100 ].num + " " + readableNumber.hundred;
    }

    else if (number > 100) {
        return readableNumber[(number - (number % 100)) / 100].num + " " + readableNumber.hundred + " " + readableNumber.searchNumberUnder100(number % 100);
    }

}

    return searchNumber(number);
    
}
