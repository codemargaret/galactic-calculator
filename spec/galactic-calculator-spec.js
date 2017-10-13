import { Age } from './../js/galactic-calculator.js';

describe('Age', function(){
  let newAge;

  beforeEach(function(){
    newAge = new Age('1985-07-17')
  });

  it('creates a new age with a birthdate', function(){
    expect(newAge.birthdate) .toEqual('1985-07-17')
  });

  it('calculates age based on birthdate and current date', function(){
    expect(newAge.ageInYears()) .toEqual(32)
  });

  it('converts age in years to age in seconds', function(){
    expect(newAge.ageInSeconds()) .toEqual(1009152000)
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
    expect(newAge.lifeOnEarth('female', 'africa', 'no', 'yes')) .toEqual(71)
  });

  it('calculates life expectancy on Earth', function(){
    expect(newAge.lifeOnEarth('male', 'asia', 'yes', 'no')) .toEqual(59)
  });

  it('calculates life expectancy on Mercury', function(){
    expect(newAge.lifeOnMercury('male', 'asia', 'yes', 'no')) .toEqual(246)
  });

  it('calculates life expectancy on Venus', function(){
    expect(newAge.lifeOnVenus('male', 'asia', 'yes', 'no')) .toEqual(95)
  });

  it('calculates life expectancy on Mars', function(){
    expect(newAge.lifeOnMars('male', 'asia', 'yes', 'no')) .toEqual(31)
  });

  it('calculates life expectancy on Jupiter', function(){
    expect(newAge.lifeOnJupiter('male', 'asia', 'yes', 'no')) .toEqual(5)
  });

  it('returns true if a user has surpassed the average life expectancy', function(){
    let oldTimer = new Age('1917-07-17')
    expect(oldTimer.beatTheOdds('male', 'asia', 'yes', 'no')) .toEqual(true)
  });

  it('returns false if a user has not surpassed the average life expectancy', function(){
    expect(newAge.beatTheOdds('male', 'asia', 'yes', 'no')) .toEqual(false)
  });

  it('shows the number of years a user has left on Earth', function(){
    expect(newAge.yearsLeftEarth('female', 'africa', 'no', 'yes')) .toEqual(39)
  });

  it('shows the number of years a user has left on Mercury', function(){
    expect(newAge.yearsLeftMercury('female', 'africa', 'no', 'yes')) .toEqual(163)
  });

  it('shows the number of years a user has left on Venus', function(){
    expect(newAge.yearsLeftVenus('female', 'africa', 'no', 'yes')) .toEqual(63)
  });

  it('shows the number of years a user has left on Mars', function(){
    expect(newAge.yearsLeftMars('female', 'africa', 'no', 'yes')) .toEqual(21)
  });

  it('shows the number of years a user has left on Jupiter', function(){
    expect(newAge.yearsLeftJupiter('female', 'africa', 'no', 'yes')) .toEqual(3)
  });
});
