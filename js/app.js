function validateNumber () {
  var $containerNumber = $("#next");

  if($(#number).val().trim().length > 0) {
    $containerNumber.removeAttr("disabled");
  } else {
    $containerNumber.attr("disabled" , true);
  }
}


$(document).ready(validateNumber);
