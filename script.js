function Converter(){
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  var valorNumerico = parseFloat(valor);

  var valorReal = valorNumerico * 5;
  var valorConvertido = document.getElementById("valorConvertido");
  var resultado = "O resultado em real é R$: " + valorReal;

  valorConvertido.innerHTML = resultado;
}
