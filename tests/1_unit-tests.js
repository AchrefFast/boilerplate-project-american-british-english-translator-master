const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
const translate = translator.translate;
suite('Unit Tests', () => {
    test('Translate Mangoes are my favorite fruit. to British English', function () {
        const input = 'Mangoes are my favorite fruit.';
        assert.equal('Mangoes are my <span class="highlight">favourite</span> fruit.', translate(input, 'am'))
    });
    test('Translate I ate yogurt for breakfast. to British English', function () {
        const input = 'I ate yogurt for breakfast.';
        assert.equal('I ate <span class="highlight">yoghurt</span> for breakfast.', translate(input, 'am'))
    });
    test("Translate We had a party at my friend's condo. to British English", function () {
        const input = "We had a party at my friend's condo.";
        const tr_word = '<span class="highlight">flat</span>'
        assert.equal("We had a party at my friend\'s " + tr_word + ".", translate(input, 'am'))
    });
    test("Translate Can you toss this in the trashcan for me? to British English", function () {
        const input = "Can you toss this in the trashcan for me?";
        const tr_word = '<span class="highlight">bin</span>'
        assert.equal("Can you toss this in the " + tr_word + " for me?", translate(input, 'am'))
    });
    test("Translate The parking lot was full. to British English", function () {
        const input = "The parking lot was full.";
        const tr_word = '<span class="highlight">car park</span>'
        assert.equal("The " + tr_word + " was full.", translate(input, 'am'))
    });
    test("Translate Like a high tech Rube Goldberg machine. to British English", function () {
        const input = "Like a high tech Rube Goldberg machine.";
        const tr_word = '<span class="highlight">Heath Robinson device</span>'
        assert.equal("Like a high tech " + tr_word + ".", translate(input, 'am'))
    });
    test("Translate To play hooky means to skip class or work. to British English", function () {
        const input = "To play hooky means to skip class or work.";
        const tr_word = '<span class="highlight">bunk off</span>'
        assert.equal("To " + tr_word + " means to skip class or work.", translate(input, 'am'))
    });
    test("Translate No Mr. Bond, I expect you to die. to British English", function () {
        const input = "No Mr. Bond, I expect you to die.";
        const tr_word = '<span class="highlight">Mr</span>'
        assert.equal("No " + tr_word + " Bond, I expect you to die.", translate(input, 'am'))
    });
    test("Translate Dr. Grosh will see you now. to British English", function () {
        const input = "Dr. Grosh will see you now.";
        const tr_word = '<span class="highlight">Dr</span>'
        assert.equal(tr_word + " Grosh will see you now.", translate(input, 'am'))
    });
    test("Translate Lunch is at 12:15 today. to British English", function () {
        const input = "Lunch is at 12:15 today.";
        const tr_word = '<span class="highlight">12.15</span>'
        assert.equal("Lunch is at " + tr_word + " today.", translate(input, 'am'))
    });
    test("Translate We watched the footie match for a while. to American English", function () {
        const input = "We watched the footie match for a while.";
        const tr_word = '<span class="highlight">soccer</span>'
        assert.equal("We watched the " + tr_word + " match for a while.", translate(input, 'br'))
    });
    test("Translate Paracetamol takes up to an hour to work. to American English", function () {
        const input = "Paracetamol takes up to an hour to work.";
        const tr_word = '<span class="highlight">Tylenol</span>'
        assert.equal(tr_word + " takes up to an hour to work.", translate(input, 'br'))
    });
    test("Translate First, caramelise the onions. to American English", function () {
        const input = "First, caramelise the onions.";
        const tr_word = '<span class="highlight">caramelize</span>'
        assert.equal("First, " + tr_word + " the onions.", translate(input, 'br'))
    });
    test("Translate I spent the bank holiday at the funfair. to American English", function () {
        const input = "I spent the bank holiday at the funfair.";
        const tr_word1 = '<span class="highlight">public holiday</span>'
        const tr_word2 = '<span class="highlight">carnival</span>'
        assert.equal("I spent the " + tr_word1 + " at the " + tr_word2 + ".", translate(input, 'br'))
    });
    test("Translate I had a bicky then went to the chippy. to American English", function () {
        const input = "I had a bicky then went to the chippy.";
        const tr_word1 = '<span class="highlight">cookie</span>'
        const tr_word2 = '<span class="highlight">fish-and-chip shop</span>'
        assert.equal("I had a " + tr_word1 + " then went to the " + tr_word2 + ".", translate(input, 'br'))
    });
    test("Translate I've just got bits and bobs in my bum bag. to American English", function () {
        const input = "I've just got bits and bobs in my bum bag.";
        const tr_word1 = '<span class="highlight">odds and ends</span>'
        const tr_word2 = '<span class="highlight">fanny pack</span>'
        assert.equal("I've just got " + tr_word1 + " in my " + tr_word2 + ".", translate(input, 'br'))
    });
    test("Translate The car boot sale at Boxted Airfield was called off. to American English", function () {
        const input = "The car boot sale at Boxted Airfield was called off.";
        const tr_word = '<span class="highlight">swap meet</span>'
        assert.equal("The " + tr_word + " at Boxted Airfield was called off.", translate(input, 'br'))
    });
    test("Translate Have you met Mrs Kalyani? to American English", function () {
        const input = "Have you met Mrs Kalyani?";
        const tr_word = '<span class="highlight">Mrs.</span>'
        assert.equal("Have you met " + tr_word + " Kalyani?", translate(input, 'br'))
    });
    test("Translate Prof Joyner of King's College, London. to American English", function () {
        const input = "Prof Joyner of King's College, London.";
        const tr_word = '<span class="highlight">Prof.</span>'
        assert.equal(tr_word + " Joyner of King's College, London.", translate(input, 'br'))
    });
    test("Translate Tea time is usually around 4 or 4.30. to American English", function () {
        const input = "Tea time is usually around 4 or 4.30.";
        const tr_word = '<span class="highlight">4:30</span>'
        assert.equal("Tea time is usually around 4 or " + tr_word + ".", translate(input, 'br'))
    });
    test("Highlight translation in Mangoes are my favorite fruit.", function () {
        const input = "Mangoes are my favorite fruit.";
        const tr_word = '<span class="highlight">favourite</span>';
        assert.equal("Mangoes are my " + tr_word + " fruit.", translate(input, 'am'));
    });
    test("Highlight translation in I ate yogurt for breakfast.", function () {
        const input = "I ate yogurt for breakfast.";
        const tr_word = '<span class="highlight">yoghurt</span>';
        assert.equal("I ate " + tr_word + " for breakfast.", translate(input, 'am'));
    });
    test("Highlight translation in We watched the footie match for a while.", function () {
        const input = "We watched the footie match for a while.";
        const tr_word = '<span class="highlight">soccer</span>';
        assert.equal("We watched the " + tr_word + " match for a while.", translate(input, 'br'));
    });
    test("Highlight translation in Paracetamol takes up to an hour to work.", function () {
        const input = "Paracetamol takes up to an hour to work.";
        const tr_word = '<span class="highlight">Tylenol</span>';
        assert.equal(tr_word + " takes up to an hour to work.", translate(input, 'br'));
    });


});
