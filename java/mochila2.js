lista = []

function verItens(){
    document.getElementById('capacidade').innerHTML = '('+lista.length+'/4 itens)'
    document.getElementById('item').value = ''
    html = ''
    for(i=0; i<lista.length; i++){
        html += `<div>
                    <div id="item`+i+`">`+lista[i]+`</div>
                    <button onclick="editarItem(`+i+`)">✐</button> 
                    <button onclick="removerItem(`+i+`)">❌</button>
                    
                </div>`
    }
    document.getElementById('itens').innerHTML = html
}

function adicionarItem(){
    item = document.getElementById('item').value
    
    if(validarItem()){
        if(lista.length < 4){
            lista.push(item)
            verItens()
        }else{
            alert('A lista está cheia.')
        }
    }
    
}

function editarItem(i){
    if(document.getElementById('item'+i).innerHTML == lista[i]){
        document.getElementById('item'+i).innerHTML = '<input id="editado" type="text" value="'+lista[i]+'">'
    }else{
        item = document.getElementById('editado').value
        if(validarItem()){
            lista[i] = item
            verItens()
        }
        
    } 
}


function removerItem(i){
    lista.splice(i,1)
    verItens()
}




function validarItem(){
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()

    if(item == ''){
        alert('Campo vazio')
        return false
    }else if(lista.indexOf(item) != -1){
        alert('Este item já está na lista.')
        return false
    }else{
        return true
    }
    

    }