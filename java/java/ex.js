function ex1(){
    nome = document.getElementById('ex1-nome').value
    document.getElementById('ex1-saida').innerHTML = 'Olá '+nome+'!'
}

function ex2(){

       
        const num1 = parseFloat(document.getElementById('numero1').value);
        const num2 = parseFloat(document.getElementById('numero2').value);
        
    
        const soma = num1 + num2;
        
    
        document.getElementById('resultado').innerText = `A soma de ${num1} e ${num2} é: ${soma}`;
    }


function ex3(){

         
           const numero = parseFloat(document.getElementById('numeroEntrada').value);
            
         
           let resultado;
           if (numero > 0) {
               resultado = `O número ${numero} é positivo.`;
           } else if (numero < 0) {
               resultado = `O número ${numero} é negativo.`;
           } else {
               resultado = `O número é zero.`;
           }
           
    
           document.getElementById('resultadoMensagem').innerText = resultado;
       }



function ex4(){
    const texto = document.getElementById('textoEntrada').value;
            
   
    const numeroCaracteres = texto.length;
  
    document.getElementById('resultadoTexto').innerText = `O texto tem ${numeroCaracteres} caracteres.`;
}


function ex5(){
   
        const numero = parseInt(document.getElementById('numeroContagem').value);
        
        let contagem = '';
        
 
        for (let i = 1; i <= numero; i++) {
            contagem += i + ' ';
        }
        

        document.getElementById('resultadoContagem').innerText = contagem;
    }

    function ex6(){
        const exSeletorCor = document.getElementById('exSeletorCor');
        const exCaixa = document.getElementById('exCaixa');


        exCaixa.style.width = '200px';
        exCaixa.style.height = '200px';
        exCaixa.style.backgroundColor = '#f0f0f0';
        exCaixa.style.border = '1px solid #ccc';
        exCaixa.style.margin = '20px 0';

    
        exSeletorCor.addEventListener('input', function() {
            exCaixa.style.backgroundColor = exSeletorCor.value;
        });
    }

    function ex7(){

     
            const result = document.getElementById('result');
            const randomNumber = Math.floor(Math.random() * 20) + 1;
            result.textContent = `Número Aleatório: ${randomNumber}`;
        
      
    }
    //function ex8()
        
        const numberList = [];

        function addNumber() {
            const input = document.getElementById('number-input');
            const number = parseInt(input.value, 10);
            
            if (!isNaN(number)) {
                numberList.push(number);
                input.value = ''; 
            } else {
                alert('Por favor, insira um número válido.');
            }
        }
        
        function displayList() {
            const list = document.getElementById('number-list');
            list.innerHTML = ''; 
            
            numberList.forEach(num => {
                const listItem = document.createElement('li');
                listItem.textContent = num;
                list.appendChild(listItem);
            });
        }
      

    let listaNumeros = [];

    function ex9() {
        const numero = parseFloat(document.getElementById('numero').value); 
    
       
        if (!isNaN(numero)) {
            listaNumeros.push(numero); 
            atualizarInformacoes();
        } else {
            alert("Por favor, insira um número válido.");
        }
    
     
        document.getElementById('numero').value = '';


        function atualizarInformacoes() {
            const quantidade = listaNumeros.length;
            const maior = Math.max(...listaNumeros);
            const menor = Math.min(...listaNumeros);
            const soma = listaNumeros.reduce((acc, curr) => acc + curr, 0);
            const media = soma / quantidade;
        
           
            document.getElementById('informacoes').innerHTML = `
                <p>Quantidade de Números: ${quantidade}</p>
                <p>Maior Número: ${maior}</p>
                <p>Menor Número: ${menor}</p>
                <p>Soma dos Números: ${soma}</p>
                <p>Média dos Números: ${media.toFixed(2)}</p>
            `;
        }
    }
    
   
    function atualizarInformacoes() {
        const quantidade = listaNumeros.length;
        const maior = Math.max(...listaNumeros);
        const menor = Math.min(...listaNumeros);
        const soma = listaNumeros.reduce((acc, curr) => acc + curr, 0);
        const media = soma / quantidade;
    
       
        document.getElementById('informacoes').innerHTML = `
            <p>Quantidade de Números: ${quantidade}</p>
            <p>Maior Número: ${maior}</p>
            <p>Menor Número: ${menor}</p>
            <p>Soma dos Números: ${soma}</p>
            <p>Média dos Números: ${media.toFixed(2)}</p>
        `;
    }
        

    

function ex10() {

}
    
        
            
let numero = 0; 

function ex12() {

    
    numero++; 
    document.getElementById('contador').innerText = numero; 
}

setInterval(ex12, 1000);


function ex13() {
    const dataAtual = new Date(); 
    const ano = dataAtual.getFullYear(); 
    const mes = dataAtual.getMonth() + 1; 
    const dia = dataAtual.getDate(); 

   
    document.getElementById('data').innerText = `Ano: ${ano}, Mês: ${mes}, Dia: ${dia}`;
}


let listaPessoas = []; 

function ex14() {
    
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cidade = document.getElementById('cidade').value;

  
    const pessoa = {
        nome: nome,
        idade: idade,
        cidade: cidade
    };

 
    listaPessoas.push(pessoa);

   
    atualizarTabela();
}


function atualizarTabela() {
    const tabela = document.getElementById('tabela-pessoas');
    tabela.innerHTML = ''; 

    
    listaPessoas.forEach(pessoa => {
        const linha = document.createElement('tr');
        linha.innerHTML = `<td>${pessoa.nome}</td><td>${pessoa.idade}</td><td>${pessoa.cidade}</td>`;
        tabela.appendChild(linha);
    });
}


function ex15() {
     
}
