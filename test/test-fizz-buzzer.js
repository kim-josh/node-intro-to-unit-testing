const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our fizzBuzzer function
describe('fizzBuzzer', function() {

  // tests the normal case
  it('should return "fizz-buzz" for multiples of 15', function() {
    const normalCases = [15, 30, 45, 60];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });
  it('should return "buzz" for multiples of 5', function() {
    const normalCases = [5, 10, 20, 25];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });
  it('should return "fizz" for multiples of 3', function() {
    const normalCases = [3, 6, 9, 12];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });
  it('should return a number if not a multiple of 3 or 5', function() {
    const normalCases = [1, 2, 7, 11];
    normalCases.forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });

  // tests for edge case
  it('should produce an error if input isn\'t a number', function() {
    const badInputs = [true, false, 'kobe', function() {}, [6, 8, 9]];
    badInputs.forEach(function(input) {
      (function() {
        fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});
