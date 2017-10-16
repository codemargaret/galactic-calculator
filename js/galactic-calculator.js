export class Age {
  constructor(birthdate) {
    this.birthdate = birthdate;
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
    let ageInYears = Math.round(ageInSeconds/31557600);
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

  lifeOnEarth(gender, continent, smoker, exercise) {
    let worldAverage = 71;
//http://www.who.int/gho/mortality_burden_disease/life_tables/situation_trends_text/en/
    if (gender === 'male') {
      worldAverage -= 2;
    } else {
      worldAverage += 3;
    }
//https://www.statista.com/statistics/270861/life-expectancy-by-continent/
    if (continent === 'africa') {
      worldAverage -= 10;
    } else if (continent === 'oceania' || continent === 'latinAmerica'){
      worldAverage += 3;
    } else if (continent === 'northAmerica' || continent === 'europe'){
      worldAverage += 7;
    }
//https://well.blogs.nytimes.com/2013/01/23/putting-a-number-to-smokings-toll/
    if (smoker === 'yes') {
      worldAverage -= 10;
    }
//http://www.independent.co.uk/life-style/health-and-families/health-news/a-daily-walk-can-add-seven-years-to-your-life-10478821.html
    if (exercise === 'yes') {
      worldAverage += 7;
    }
    return worldAverage;
  }

  lifeOnMercury(gender, continent, smoker, exercise) {
    let earthLife = this.lifeOnEarth(gender, continent, smoker, exercise);
    let mercuryLife = Math.round(earthLife / 0.24);
    return mercuryLife;
  }

  lifeOnVenus(gender, continent, smoker, exercise) {
    let earthLife = this.lifeOnEarth(gender, continent, smoker, exercise);
    let venusLife = Math.round(earthLife / 0.62);
    return venusLife;
  }

  lifeOnMars(gender, continent, smoker, exercise) {
    let earthLife = this.lifeOnEarth(gender, continent, smoker, exercise);
    let marsLife = Math.round(earthLife / 1.88);
    return marsLife;
  }

  lifeOnJupiter(gender, continent, smoker, exercise) {
    let earthLife = this.lifeOnEarth(gender, continent, smoker, exercise);
    let jupiterLife = Math.round(earthLife / 11.86);
    return jupiterLife;
  }

  beatTheOdds(gender, continent, smoker, exercise) {
    let lifeExpect = this.lifeOnEarth(gender, continent, smoker, exercise);
    let age = this.ageInYears();
    if (age > lifeExpect) {
      return true;
    } else {
      return false;
    }
  }

  yearsLeftEarth(gender, continent, smoker, exercise) {
    let lifeExpect = this.lifeOnEarth(gender, continent, smoker, exercise);
    let age = this.ageInYears();
    let yearsLeft = lifeExpect - age;
    return yearsLeft;
  }

  yearsLeftMercury(gender, continent, smoker, exercise) {
    let lifeExpect = this.lifeOnMercury(gender, continent, smoker, exercise);
    let age = this.ageOnMercury();
    let yearsLeft = lifeExpect - age;
    return yearsLeft;
  }

  yearsLeftVenus(gender, continent, smoker, exercise) {
    let lifeExpect = this.lifeOnVenus(gender, continent, smoker, exercise);
    let age = this.ageOnVenus();
    let yearsLeft = lifeExpect - age;
    return yearsLeft;
  }

  yearsLeftMars(gender, continent, smoker, exercise) {
    let lifeExpect = this.lifeOnMars(gender, continent, smoker, exercise);
    let age = this.ageOnMars();
    let yearsLeft = lifeExpect - age;
    return yearsLeft;
  }

  yearsLeftJupiter(gender, continent, smoker, exercise) {
    let lifeExpect = this.lifeOnJupiter(gender, continent, smoker, exercise);
    let age = this.ageOnJupiter();
    let yearsLeft = lifeExpect - age;
    return yearsLeft;
  }
}
