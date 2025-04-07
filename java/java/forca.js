

alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
palavras = ['COMPUTADOR', 'VASCO', 'CAPIVARA', 'CORALINE', 'RELOGIO', 'TECLADO', 'SIM', 'PABLO VEGETTI']
palavra = palavras[Math.floor(Math.random() * palavras.length)]

vida = 5
erros = []
posicoes = []
for(i=0; i<palavra.length; i++){
    if(palavra[i] == '-' || palavra[i] == ' '){
        posicoes.push('-')
    }else{
        posicoes.push('_')
    } 
}

document.getElementById('resultado').innerHTML = 'Vida: '+vida+'<br> Erros: '+erros+'<br>Palavra: '+posicoes.join(' ')

function enviarLetra(){
    letra = document.getElementById('letra').value.toUpperCase()
    document.getElementById('letra').value = ''
    letraEncontrada = false

    // Tudo ou nada
    if(letra.length > 1){

        if(letra == palavra){
            telaVitoria()
        }else{
            telaDerrota()
        }

    }else{

        // Validando entrada
        if(alfabeto.indexOf(letra) == -1){
            alert('Caractere inválido. Insira uma letra do alfabeto.') 
        }else{

            // Procurando letra
            for(i=0; i<palavra.length; i++){
                if(palavra[i] == letra){
                    posicoes[i] = letra
                    letraEncontrada = true
                }
            }

            // Sistema de vida
            if(letraEncontrada == false){
                if(erros.indexOf(letra) != -1){
                    alert('Você já errou essa letra.')
                }else{
                    erros.push(letra)
                    vida--
                }
            }

        }

        // Interface
        if(posicoes.indexOf('_') == -1){
            telaVitoria()
        }else if(vida <= 0){
            telaDerrota()
        }else{
            document.getElementById('resultado').innerHTML = 'Vida: '+vida+'<br> Erros: '+erros+'<br>Palavra: '+posicoes.join(' ')
        }

    }

}

function telaDerrota(){
    document.getElementById('resultado').innerHTML = '<h1>Você perdeu...</h1> A palavra era <b>'+palavra+'</b>.'
}

function telaVitoria(){
    document.getElementById('resultado').innerHTML = '<h1>Você venceu!</h1>'
}

tempo = 10
setInterval(function(){
    
    if(tempo > 0){
        tempo--
        document.getElementById('timer').innerHTML = 'Tempo: '+tempo
    }else{
        document.getElementById('timer').innerHTML = ''
        telaDerrota()
    }

},1000)
