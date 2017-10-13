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
}
