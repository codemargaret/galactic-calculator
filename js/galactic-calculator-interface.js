import { Age } from './../js/galactic-calculator.js';

$(document).ready(function(){
  $('#age').submit(function(event){
    event.preventDefault();
    $('#dateShow').text(moment());
    var now = moment();
    alert(now);
    var birthdate = $('#birthdate').val();
    alert(birthdate);
    $('#birthdateShow').text(birthdate);
    var age = now.diff(birthdate, 'years');
    alert(age);
    $('#ageShow').text(age);
    // newAge = new Age(birthdate)
  });
});
