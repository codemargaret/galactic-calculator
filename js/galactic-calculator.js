export class Age {
  constructor(birthdate, gender, continent, smoker, exercise) {
    this.birthdate = birthdate;
    this.gender = gender;
    this.continent = continent;
    this.smoker = smoker;
    this.exercise = exercise;
  }

  ageInYears() {
    let birthday = this.birthdate;
    let year = birthday.slice(0,4);
    let month = birthday.slice(5,7);
    let day = birthday.slice(8,10);
    let date = month + '/' + day + '/' + year + ' 00:00:00';
    let newDate = new Date(date);
    let milliBirthday = newDate.getTime();
    let milliNow = Date.now();
    let ageInSeconds = (milliNow - milliBirthday)/1000;
    let ageInYears = Math.floor(ageInSeconds/31557600);
    return ageInYears;
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

  lifeOnEarth() {
    let worldAverage = 71;
//http://www.who.int/gho/mortality_burden_disease/life_tables/situation_trends_text/en/
    if (this.gender === 'male') {
      worldAverage -= 2;
    } else {
      worldAverage += 3;
    }
//https://www.statista.com/statistics/270861/life-expectancy-by-continent/
    if (this.continent === 'africa') {
      worldAverage -= 10;
    } else if (this.continent === 'oceania' || this.continent === 'latinAmerica'){
      worldAverage += 3;
    } else if (this.continent === 'northAmerica' || this.continent === 'europe'){
      worldAverage += 7;
    }
//https://well.blogs.nytimes.com/2013/01/23/putting-a-number-to-smokings-toll/
    if (this.smoker === 'yes') {
      worldAverage -= 10;
    }
//http://www.independent.co.uk/life-style/health-and-families/health-news/a-daily-walk-can-add-seven-years-to-your-life-10478821.html
    if (this.exercise === 'yes') {
      worldAverage += 7;
    }
    return worldAverage;
  }

  lifeOnMercury() {
    let earthLife = this.lifeOnEarth();
    let mercuryLife = Math.round(earthLife / 0.24);
    return mercuryLife;
  }

  lifeOnVenus() {
    let earthLife = this.lifeOnEarth();
    let venusLife = Math.round(earthLife / 0.62);
    return venusLife;
  }

  lifeOnMars() {
    let earthLife = this.lifeOnEarth();
    let marsLife = Math.round(earthLife / 1.88);
    return marsLife;
  }

  lifeOnJupiter() {
    let earthLife = this.lifeOnEarth();
    let jupiterLife = Math.round(earthLife / 11.86);
    return jupiterLife;
  }

  beatTheOdds() {
    let lifeExpect = this.lifeOnEarth();
    let age = this.ageInYears();
    if (age > lifeExpect) {
      return true;
    } else {
      return false;
    }
  }

  yearsLeftEarth() {
    let lifeExpect = this.lifeOnEarth();
    let age = this.ageInYears();
    let yearsLeft = lifeExpect - age;
    return yearsLeft;
  }

  yearsLeftMercury() {
    let lifeExpect = this.lifeOnMercury();
    let age = this.ageOnMercury();
    let yearsLeft = lifeExpect - age;
    return yearsLeft;
  }

  yearsLeftVenus() {
    let lifeExpect = this.lifeOnVenus();
    let age = this.ageOnVenus();
    let yearsLeft = lifeExpect - age;
    return yearsLeft;
  }

  yearsLeftMars() {
    let lifeExpect = this.lifeOnMars();
    let age = this.ageOnMars();
    let yearsLeft = lifeExpect - age;
    return yearsLeft;
  }

  yearsLeftJupiter() {
    let lifeExpect = this.lifeOnJupiter();
    let age = this.ageOnJupiter();
    let yearsLeft = lifeExpect - age;
    return yearsLeft;
  }
}
