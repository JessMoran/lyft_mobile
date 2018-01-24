var $numberInput = $("#number");


function loadPage (){
  $numberInput.keyup(validateNumber);
}


function validateNumber () {
  var $containerNumber = $("#next");

  if($(this).val().trim().length > 0) {
    $containerNumber.removeAttr("disabled");
  } else {
    $containerNumber.attr("disabled" , true);
  }
}


$(document).ready(loadPage);
