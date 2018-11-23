// INICIALIZACIÓN
// JQuery = non conflict mode
// $ = conflict mode
// $(document).ready( () => {
//
//   alert(mul(suma(10+10,),10))
// })

imprime(mul(3.1416,9.14))
regresa()
fondo("purple")




// FUNCIONES ESTÁTICAS
function suma(valor1=1, valor2=1) {
  console.log(100 + 200)
  return valor1 + valor2
  // se nombra primero "function" después el nombre de la función, argumentos o parámetros entre ()
}
function mul(valor1=5,valor2=7){
  return valor1*valor2
}
function imprime(){
  return $(".participantes_item_text h2").append(parametro)
  // return $(".participantes_item_text h2").html(parametro)
}
function fondo(color){
  $("body").css("background-color",color)
}
