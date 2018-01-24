//variables globales en uso para todas las funciones

var $numberInput = $("#number");
var $btnNext = $("#next");
var $addCode = $("#code");
var $codeInput = $("#newCode")
var $btnNext2 = $("#next2");

//funciona al cargar la página
function loadPage (){
  $numberInput.keyup(validateNumber);
  $btnNext.click(getCode);
  $codeInput.keyup(validateCode);
}

//Funciones primer vista
//Valida que no tenga espacios y activa el boton next
function validateNumber () {

  if($(this).val().trim().length > 0) {
    $btnNext.removeAttr("disabled");
  } else {
    $btnNext.attr("disabled" , true);
  }
}

//función que da un numero aleatorio de 3 digitos
//variable global para usar $code en la sig función
  var $code = (Math.floor(Math.random(100) * Math.floor(999)));

function getCode() {
  $addCode.text("LAB-" + $code);
}
//!Funciones primer vista

//funciones Segundavista
//Valida si el código es igual al enviado anteriormente
function validateCode (){

 if ($(this).val().trim().length > 0) {
   $btnNext2.removeAttr("disabled");
 } else {
   $btnNext2.attr("disabled" , true);
 }

}



$(document).ready(loadPage);
