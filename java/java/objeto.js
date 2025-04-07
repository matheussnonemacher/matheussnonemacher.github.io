

pessoas = []

telaLogin()

function telaCadastro(){
    document.getElementById('cadastro').style.display = 'block'
    document.getElementById('login').style.display = 'none'
    document.getElementById('info').innerHTML = ''
}

function telaLogin(){
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('login').style.display = 'block'
    document.getElementById('info').innerHTML = ''
}

function cadastrar(){

    _nome = document.getElementById('nome').value
    _idade = parseInt(document.getElementById('idade').value)
    _email = document.getElementById('email').value
    _senha = document.getElementById('senha').value
    _senhaconf = document.getElementById('senhaconf').value

    validarCadastro()

    if(erros.length == 0){

        pessoa = {
            nome: _nome,
            idade: _idade,
            email: _email,
            senha: _senha,
            genero: _genero
        }
        pessoas.push(pessoa)

        document.getElementById('info').innerHTML = '<div class="positivo">Cadastro realizado com sucesso!<div>'

    }else{

        document.getElementById('info').innerHTML = '<div class="negativo">'+erros.join('</div><div class="negativo">')+'</div>'

    }
    
}

function validarCadastro(){

    erros = []

    if(_nome == ''){
        erros.push('Insira um nome.')
    }
    if(isNaN(_idade)){
        erros.push('Insira uma idade.') 
    }
    if(_email == ''){
        erros.push('Insira um email.')
    }
    if(_senha != _senhaconf){
        erros.push('As senhas precisarm ser iguais.')
    }
    if(_senha.length < 4){
        erros.push('A senha deve ter 4 ou mais caracteres.')
    }

    for(i=0; i<pessoas.length; i++){
        if(_email == pessoas[i].email){
            erros.push('Este email já está sendo utilizado.')
        }
    }

    if(document.getElementById('gen_m').checked){
        _genero = 'M'
    }else if(document.getElementById('gen_f').checked){
        _genero = 'F'
    }else if(document.getElementById('gen_o').checked){
        _genero = 'Outro'
    }else{
        erros.push('Informe um gênero.')
    }

}

function entrar(){
    email = document.getElementById('email-login').value
    senha = document.getElementById('senha-login').value

    for(i=0; i<pessoas.length; i++){
        if(pessoas[i].email == email){
            p = i
        }
    }

    if(p != -1){
      
        if(senha == pessoas[p].senha){
            document.getElementById('info').innerHTML = '<div class="positivo">Login realizado</div>'
        }else{
             document.getElementById('info').innerHTML = '<div class="positivo">Senha incorreta</div>'
        }

          
    }else{
       document.getElementById('info').innerHTML = '<div class="negativo">Email não encontrado</div>'
    }
}