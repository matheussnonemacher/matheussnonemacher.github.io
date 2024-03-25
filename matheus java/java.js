function cadastrar(){
    
    nome = document.getElementById('nome').value  
    email = document.getElementById('email').value
    senha = document.getElementById('senha').value
    senha2 = document.getElementById('senha2').value

    if(nome == ''){
        alert('Nome não Preenchido')
    }else if(nome.length < 3){
        alert('Nome pequeno demais')
    }else if(nome.length > 12){
        alert('Nome longo demais')
    }else if(senha.length < 8){
        alert('senha muito curta')
    }else if(senha == senha2){
        document.getElementById('cadastrar').innerHTML = "foi"

    }else{
        document.getElementById('cadastrar').innerHTML = "AS SENHAS NÃO SÃO IGUAIS"
    }




    
}