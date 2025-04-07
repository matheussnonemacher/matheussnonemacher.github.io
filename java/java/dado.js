function jogarDados(){
    dados = parseInt(document.getElementById('dados').value)
    lados = parseInt(document.getElementById('lados').value)

    soma = 0
    resultados = []
    for(i=0; i<dados; i++){
    sorteado = Math.floor(Math.random() * lados+1)
    resultados.push(sorteado)
    soma += sorteado
    }

    document.getElementById('resultado').innerHTML = '<b>'+soma+'</b> ('+resultados+')'

  
    
   
}