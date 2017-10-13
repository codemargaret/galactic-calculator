import { Age } from './../js/galactic-calculator.js';

describe('Age', function(){
  let newAge;

  beforeEach(function(){
    newAge = new Age('1985-07-17')
  });

  it('creates a new age with a birthdate', function(){
    expect(newAge.birthdate) .toEqual('1985-07-17')
  });

  // it('shows the current date', function(){
  //   expect(moment()) .toEqual(moment())
  // });

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
    expect(newAge.lifeOnEarth('female', 'Africa', false, true)) .toEqual(71)
  });

  it('calculates life expectancy on Earth', function(){
    expect(newAge.lifeOnEarth('male', 'Asia', true, false)) .toEqual(59)
  });

  // it('calculates life expectancy on Mercury', function(){
  //   expect(newAge.lifeOnEarth('male', 'Asia', true, false)) .toEqual(59)
  // });

  // it('calculates life expectancy on Venus', function(){
  //   expect(newAge.lifeOnEarth('male', 'Asia', true, false)) .toEqual(59)
  // });
  //
  // it('calculates life expectancy on Mars', function(){
  //   expect(newAge.lifeOnEarth('male', 'Asia', true, false)) .toEqual(59)
  // });
  //
  // it('calculates life expectancy on Jupiter', function(){
  //   expect(newAge.lifeOnEarth('male', 'Asia', true, false)) .toEqual(59)
  // });
});
