$(document).ready(readyNow);

function readyNow(){
  $('.submit').on('click', function() {
      var firstName = $('input[name=firstName]').val();
      var lastName = $('input[name=lastName]').val();
      var idNumber = $('input[name=idNumber]').val();
      var jobTitle = $('input[name=jobTitle]').val();
      var annualSalary = $('input[name=annualSalary]').val();
    });


}
