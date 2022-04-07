var assert = require('assert');

describe('Mathematical Operation - Test Suite', function () {
    var a = 10;
    var b = 10;

    this.timeout(100);
    it('Addition of 2 vars', function () {

        var c = a + b;
        assert.equal(c,20);
    });

    it('Subtraction of 2 vars', function () {

        var c = a - b;
        assert.equal(c,0);
    });

    it('Multiplication of 2 vars', function () {

        var c = a * b;
        assert.equal(c,100);
    });

    it('Division of 2 vars', function () {

        var c = a / b;
        assert.equal(c,1);
    });

   // it('This is pending test') //This is to show that unfinished test will display as pending
//I comment this bc of terminal 
});