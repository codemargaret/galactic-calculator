import { Age } from './../js/galactic-calculator.js';

describe('Age', function(){
  let newAge;

  beforeEach(function(){
    newAge = new Age(1)
  });

  it('creates a new age in Earth years', function(){
    expect(newAge.earthYears) .toEqual(1)
  });

  it('converts age in years to age in seconds', function(){
    expect(newAge.ageInSeconds()) .toEqual(31536000)
  });
});
