var moment = require('moment');

import { Age } from './../js/galactic-calculator.js';

describe('Age', function(){
  let newAge;
  let oldTimer;
  let baseTime;
  let fakeDate;

  beforeEach(function(){
    newAge = new Age('1985-07-17', 'female', 'africa', 'no', 'yes')
    oldTimer = new Age('1917-07-17', 'male', 'asia', 'yes', 'no')
    baseTime = new Date(2018, 2, 20);
    fakeDate = jasmine.clock().mockDate(baseTime);
  });

  it('creates a new age with a birthdate', function(){
    expect(newAge.birthdate) .toEqual('1985-07-17')
  });

  it('calculates age based on birthdate and current date', function(){
    expect(newAge.ageInYears()) .toEqual(32)
  });

  it('converts age in Earth years to Mercury years', function(){
    expect(newAge.ageOnMercury()) .toEqual(133)
  });

  it('converts age in Earth years to Venus years', function(){
    expect(newAge.ageOnVenus()) .toEqual(52)
  });

  it('converts age in Earth years to Mars years', function(){
    expect(newAge.ageOnMars()) .toEqual(17)
  });

  it('converts age in Earth years to Jupiter years', function(){
    expect(newAge.ageOnJupiter()) .toEqual(3)
  });

  it('calculates life expectancy on Earth', function(){
    expect(newAge.lifeOnEarth()) .toEqual(71)
  });

  it('calculates life expectancy on Earth', function(){
    expect(oldTimer.lifeOnEarth()) .toEqual(59)
  });

  it('calculates life expectancy on Mercury', function(){
    expect(oldTimer.lifeOnMercury()) .toEqual(246)
  });

  it('calculates life expectancy on Venus', function(){
    expect(oldTimer.lifeOnVenus()) .toEqual(95)
  });

  it('calculates life expectancy on Mars', function(){
    expect(oldTimer.lifeOnMars()) .toEqual(31)
  });

  it('calculates life expectancy on Jupiter', function(){
    expect(oldTimer.lifeOnJupiter()) .toEqual(5)
  });

  it('returns true if a user has surpassed the average life expectancy', function(){
    expect(oldTimer.beatTheOdds()) .toEqual(true)
  });

  it('returns false if a user has not surpassed the average life expectancy', function(){
    expect(newAge.beatTheOdds()) .toEqual(false)
  });

  it('shows the number of years a user has left on Earth', function(){
    expect(newAge.yearsLeftEarth()) .toEqual(39)
  });

  it('shows the number of years a user has left on Mercury', function(){
    expect(newAge.yearsLeftMercury()) .toEqual(163)
  });

  it('shows the number of years a user has left on Venus', function(){
    expect(newAge.yearsLeftVenus()) .toEqual(63)
  });

  it('shows the number of years a user has left on Mars', function(){
    expect(newAge.yearsLeftMars()) .toEqual(21)
  });

  it('shows the number of years a user has left on Jupiter', function(){
    expect(newAge.yearsLeftJupiter()) .toEqual(3)
  });
});
