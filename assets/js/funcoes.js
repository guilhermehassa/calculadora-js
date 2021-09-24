function seNumero(valor){
  if(!isNaN(valor) && visor.textContent.length <= 10) return true;
  else return false;
}

function seVisorZerado(){
  if(visor.textContent == '') return true;
  else return false;
}

function acrescentarNoVisor(numero){
  visor.textContent=visor.textContent+numero;
}

function limparVisor(){
  visor.textContent='';
}

function resetarValores(){
  numeroAnterior = '';
  operacao = '';
  resultado = '';
}

function apagarCaractere(){
  var novoValor = visor.textContent.substring(0, visor.textContent.length - 1);
  visor.textContent = novoValor;
}

function iniciarOperacao(numeroAtual,clicado){
  numeroAnterior = numeroAtual;
  operacao=clicado;
}

function calcular(numeroAtual){
  
  numeroAnterior = numeroAnterior.replace(',','.');
  numeroAtual = numeroAtual.replace(',','.');

  numeroAnterior = parseFloat(numeroAnterior);
  numeroAtual = parseFloat(numeroAtual);
  
  switch(operacao){
    case '+':
      resultado = numeroAnterior+numeroAtual;
      break;
    case '-':
      resultado = numeroAnterior-numeroAtual;
      break;
    case '*':
      resultado = numeroAnterior*numeroAtual;
      break;
    case '/':
      resultado = numeroAnterior/numeroAtual;
      break;
  }
  /* VOLTA A VARIAVEL PRA STRING, PRA PODER MANIPULAR FUTURAMENTE*/
  resultado = String(resultado);
  resultado = resultado.replace('.',',');
  return resultado;
}



