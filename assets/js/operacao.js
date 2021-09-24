var visor = document.querySelector('.calculadora__visor');
var botoes = document.querySelector('.calculadora__botoes');

var numeroAnterior='';
var operacao = '';
var resultado = '';
var exibiuResultado = false;

botoes.addEventListener('click',function(event){
  var clicado = event.target.textContent;
  var numeroAtual = visor.textContent;
  
  if (seNumero(clicado)){
    if(seVisorZerado()){
      acrescentarNoVisor(clicado);
    }
    else{
      if(operacao==''){
        acrescentarNoVisor(clicado);
      }
      else{
        if(exibiuResultado==true){
          limparVisor();
          exibiuResultado=false;
        }
        acrescentarNoVisor(clicado);
      }
    }
  }
  

  else if(clicado == ',' && visor.textContent.search(',')<0){
    acrescentarNoVisor(clicado);
  }
  else if(clicado == 'C'){
    resetarValores();
    limparVisor();
  }
  else if(clicado == '<<'){
    apagarCaractere();
  }
  else if(clicado == '='){
    resultado = calcular(numeroAtual);

    limparVisor();
    acrescentarNoVisor(resultado);
    resetarValores();
    exibiuResultado=true;
  }
  else if(event.target.className!='calculadora__botoes'){
    //PRIMEIRO NUMERO DA CONTA
    if(numeroAnterior == ''){
      
      iniciarOperacao(numeroAtual,clicado);
      limparVisor();
    }
    //CONTA EM CIMA DE CONTA
    else{
      
      resultado = calcular(numeroAtual);

      exibiuResultado=true;

      limparVisor();
      acrescentarNoVisor(resultado);
      iniciarOperacao(resultado,clicado);
    }
    
  }

  

});

document.addEventListener('keypress',function(event){
  console.log(event.key);
});