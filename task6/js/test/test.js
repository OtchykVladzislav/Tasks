const mocha = require('mocha');
const Sauses = require('../product/sauses')
const ingredients = require('../product/filling')
const assert = require('assert').strict;
describe('Test Sauces',function() {
  describe('Test toString', function(){
    it('Validation of values', ()=>{

      let data = {
        'name' : 'Ketchup',
        'cost' : 1,
        'calories' : 12,
      }

      const string1 = "Ketchup";
      const name1 = new Sauses(data);
      assert.equal(name1.toString(), string1);
    });
  });
});

describe('Test Ingridients',function() {
  describe('Test toString', function(){
    it('Validation of values', ()=>{

      let data = {
        'name' : 'Cheese',
        'cost' : 1,
        'calories' : 90
      }

      const string2 = "Cheese";
      const name2 = new ingredients(data);
      assert.equal(name2.toString(), string2);
    });
  });
});
