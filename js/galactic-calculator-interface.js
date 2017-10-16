import { Age } from './../js/galactic-calculator.js';

$(document).ready(function(){
  $('#age').submit(function(event){
    event.preventDefault();
    $('#dateShow').text(moment());
//Capture user input
    let birthdate = $('#birthdate').val();
    let gender = $('input[name=gender]:checked').val();
    let continent = $('select#continent:selected').val();
    let smoker = $('input[name=smoker]:checked').val();
    let exercise = $('input[name=exercise]:checked').val();
//Show user birthday and create new Age
    $('#birthdateShow').text(birthdate);
    let userAge = new Age(birthdate);
//Calculate and show age on different planets
    let userAgeEarth = userAge.ageInYears();
    $('#ageEarth').text(userAgeEarth);
    let userAgeMercury = userAge.ageOnMercury();
    $('#ageMercury').text(userAgeMercury);
    let userAgeVenus = userAge.ageOnVenus();
    $('#ageVenus').text(userAgeVenus);
    let userAgeMars = userAge.ageOnMars();
    $('#ageMars').text(userAgeMars);
    let userAgeJupiter = userAge.ageOnJupiter();
    $('#ageJupiter').text(userAgeJupiter);
//Calculate and show life expectancy on different planets
    let userLifeEarth = userAge.lifeOnEarth();
    $('#lifeEarth').text(userLifeEarth);
    let userLifeMercury = userAge.lifeOnMercury();
    $('#lifeMercury').text(userLifeMercury);
    let userLifeVenus = userAge.lifeOnVenus();
    $('#lifeVenus').text(userLifeVenus);
    let userLifeMars = userAge.lifeOnMars();
    $('#lifeMars').text(userLifeMars);
    let userLifeJupiter = userAge.lifeOnJupiter();
    $('#lifeJupiter').text(userLifeJupiter);
//Calculate and show time left on each planet
    let userTimeEarth = userAge.yearsLeftEarth();
    $('#timeLeftEarth').text(userTimeEarth);
    let userTimeMercury = userAge.yearsLeftMercury();
    $('#timeLeftMercury').text(userTimeMercury);
    let userTimeVenus = userAge.yearsLeftVenus();
    $('#timeLeftVenus').text(userTimeVenus);
    let userTimeMars = userAge.yearsLeftMars();
    $('#timeLeftMars').text(userTimeMars);
    let userTimeJupiter = userAge.yearsLeftJupiter();
    $('#timeLeftJupiter').text(userTimeJupiter);
  });
});
