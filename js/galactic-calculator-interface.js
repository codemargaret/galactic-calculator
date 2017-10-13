import { Age } from './../js/galactic-calculator.js';

$(document).ready(function(){
  $('#age').submit(function(event){
    event.preventDefault();
    $('#dateShow').text(moment());
    var now = moment();
    var birthdate = $('#birthdate').val();
    $('#birthdateShow').text(birthdate);
    var userAge = new Age(birthdate);
    var userAgeEarth = userAge.ageInYears();
    $('#ageShow').text(userAgeEarth);
  });
});
