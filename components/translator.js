const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
const amSpell = Object.keys(americanToBritishSpelling);
const brSpell = Object.values(americanToBritishSpelling);
const amTitles = Object.keys(americanToBritishTitles);
const brTitles = Object.values(americanToBritishTitles);
const amOnlyKeys = Object.keys(americanOnly);
const brOnlyKeys = Object.keys(britishOnly);

// // This "class" will be handling the translation of words from American English to British English and vice versa.
class Translator {

    translate(string, toLanguage) {

        const spanning = (word) => {
            return '<span class="highlight">' + word + '</span>'
        }

        if (toLanguage.toLowerCase() == 'am') {

            const regex_time = /(\d+?)([:])(\d+)/g;
            string = string.replace(regex_time, spanning('$1.$3'));

            for (let i = 0; i < amSpell.length; i++) {
                let word = new RegExp("(?<!-)" + amSpell[i] + "(?!\\w)", 'gi');
                string = string.replace(word, spanning(brSpell[i]));
            }

            for (let i = 0; i < amTitles.length; i++) {
                let word = new RegExp(amTitles[i] + "(?!\\w)", 'gi');
                let new_word = brTitles[i][0].toUpperCase() + brTitles[i].slice(1);
                string = string.replace(word, spanning(new_word));
            }

            for (let i = 0; i < amOnlyKeys.length; i++) {
                let word = new RegExp("(?<!-)" + amOnlyKeys[i] + "(?!\\w)", 'gi');
                string = string.replace(word, spanning(americanOnly[amOnlyKeys[i]]));
            }
            return string;
        }

        if (toLanguage.toLowerCase() == 'br') {

            const regex_time = /(\d+?)([.])(\d+)/g;
            string = string.replace(regex_time, spanning('$1:$3'));

            for (let i = 0; i < brSpell.length; i++) {
                let word = new RegExp("(?<!-)" + brSpell[i] + "(?!\\w)", 'gi');
                string = string.replace(word, spanning(amSpell[i]));
            }

            for (let i = 0; i < brTitles.length; i++) {
                let word = new RegExp(brTitles[i] + "(?!\\w)", 'gi');
                let new_word = amTitles[i][0].toUpperCase() + amTitles[i].slice(1);
                string = string.replace(word, spanning(new_word));
            }

            for (let i = 0; i < brOnlyKeys.length; i++) {
                let word = new RegExp("(?<!-)" + brOnlyKeys[i] + "(?!\\w)", 'gi');
                string = string.replace(word, spanning(britishOnly[brOnlyKeys[i]]));
            }
            return string;
        }
    }
}

module.exports = Translator;
const translator = new Translator();
const input = "chip shop"
console.log(translator.translate(input, 'br'));
