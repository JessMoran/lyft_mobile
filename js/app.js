var $numberInput = $("#number");
var $containerNumber = $("#next");
var $addCode = $("#code");

function loadPage (){
  $numberInput.keyup(validateNumber);
  $containerNumber.click(getCode);
}

function validateNumber () {

  if($(this).val().trim().length > 0) {
    $containerNumber.removeAttr("disabled");
  } else {
    $containerNumber.attr("disabled" , true);
  }
}



function getCode() {
  var $code = (Math.floor(Math.random(100) * Math.floor(900)));
  $addCode.text("LAB-" + $code);

}




$(document).ready(loadPage);
