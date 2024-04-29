

mochila = []

function verItens(){
    document.getElementById('capacidade').innerHTML = '('+mochila.length+'/4 itens)'
    document.getElementById('item').value = ''
    html = ''
    for(i=0; i<mochila.length; i++){
        html += `<div>
                    <div id="item`+i+`">`+mochila[i]+`</div>
                    <button onclick="editarItem(`+i+`)">E</button>
                    <button onclick="removerItem(`+i+`)">X</button>
                </div>`
    }
    document.getElementById('itens').innerHTML = html
}

function adicionarItem(){
    item = document.getElementById('item').value
    
    if(validarItem()){
        if(mochila.length < 4){
            mochila.push(item)
            verItens()
        }else{
            alert('A mochila está cheia.')
        }
    }
    
}

function removerItem(i){
    mochila.splice(i,1)
    verItens()
}

function editarItem(i){
    if(document.getElementById('item'+i).innerHTML == mochila[i]){
        document.getElementById('item'+i).innerHTML = '<input id="editado" type="text" value="'+mochila[i]+'">'
    }else{
        item = document.getElementById('editado').value
        if(validarItem()){
            mochila[i] = item
            verItens()
        }
        
    } 
}

function validarItem(){
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()

    if(item == ''){
        alert('Campo vazio')
        return false
    }else if(mochila.indexOf(item) != -1){
        alert('Este item já está na lista.')
        return false
    }else{
        return true
    }
    

    }