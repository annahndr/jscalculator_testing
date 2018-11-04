var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2') // to.eventually stops it from running instantaneously
  })

  it('can accept multiple number clicks', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('23');
  })

  // Do the arithmetical operations update the display with the result of the operation?
  it('can display the result of an operation', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');

  })
  // Can multiple operations be chained together?
  it('can chain multiple operations together', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('21');

  })

    // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
    it('can deal with negatives, decimals and large numbers', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number8')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number7')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number9')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('30617.999999999996');
    })

    // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.

    it('deals with dividing by zero properly', function(){
      running_total = element(by.css('#running_total'));
      element(by.css('#number6')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('Undefined');//? or zero?
    })

});
