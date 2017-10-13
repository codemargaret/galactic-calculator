export class Age {
  constructor(birthdate) {
    this.birthdate = birthdate;
  }

  // currentDate() {
  //   now = moment();
  //   return now
  // }
  //Keep getting 'moment is undefined' error.  For now, I'll format the functions with the current date inputted manually.  Hopefully I'll figure out how to use moment later.

  ageInYears() {
    let now = '2017'
    let birthYear = this.birthdate.slice(0,4)
    let earthYears = now - birthYear;
    return earthYears;
  }

//Not relevant without Moment
  ageInSeconds() {
    let earthSeconds = this.ageInYears() * 31536000;
    return earthSeconds;
  }

  ageOnMercury() {
    let mercuryAge = Math.round(this.ageInYears() / 0.24);
    return mercuryAge;
  }

  ageOnVenus() {
    let venusAge = Math.round(this.ageInYears() / 0.62);
    return venusAge;
  }

  ageOnMars() {
    let marsAge = Math.round(this.ageInYears() / 1.88);
    return marsAge;
  }

  ageOnJupiter() {
    let marsAge = Math.round(this.ageInYears() / 11.86);
    return marsAge;
  }

  lifeOnEarth(gender, continent, smoker, exercise) {
    let worldAverage = 71;
//http://www.who.int/gho/mortality_burden_disease/life_tables/situation_trends_text/en/
    if (gender === 'male') {
      worldAverage -= 2;
    } else {
      worldAverage += 3;
    }
//https://www.statista.com/statistics/270861/life-expectancy-by-continent/
    if (continent === 'Africa') {
      worldAverage -= 10;
    } else if (continent === 'Oceania' || continent === 'Latin America'){
      worldAverage += 3;
    } else if (continent === 'North America' || continent === 'Europe'){
      worldAverage += 7;
    }
//https://well.blogs.nytimes.com/2013/01/23/putting-a-number-to-smokings-toll/
    if (smoker === true) {
      worldAverage -= 10;
    }
//http://www.independent.co.uk/life-style/health-and-families/health-news/a-daily-walk-can-add-seven-years-to-your-life-10478821.html
    if (exercise === true) {
      worldAverage += 7;
    }
    return worldAverage;
  }
}
