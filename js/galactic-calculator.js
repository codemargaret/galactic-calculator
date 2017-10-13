export class Age {
  constructor(earthYears) {
    this.earthYears = earthYears;
  }

  ageInSeconds() {
    let earthSeconds = this.earthYears * 31536000;
    return earthSeconds;
  }
}
