mochila = []

    function atualizarLista(){
        document.getElementById('capacidade').innerHTML = mochila.length+'/10'
        html = ""
        for(i=0; i<mochila.length; i++){
            html += '<div><div id="item'+i+'">'+mochila[i]+'</div><button onclick="EditarItem('+i+')">E</button><button onclick="removerItem('+i+')">X</button></div>'
        }

        
        document.getElementById('item').value=""
        document.getElementById('itens').innerHTML = html
    }
    

function add(){
    item = document.getElementById('item').value.toLowerCase()


    if(item == ''){

        alert('campo vazio')

    }else if (mochila.indexOf(item) != -1){

        alert('este item já está na lista')

    }else{
        if(mochila.length < 10){
            mochila.push(item)
            atualizarLista()
        
        }else{
            alert('A mochila está cheia')
        }



}
}

function removerItem(i){
    mochila.splice(i,1)
    atualizarLista()
}


function EditarItem(i){
atualizarLista()

if(document.getElementById('item'+i).innerHTML == mochila[i]){

    document.getElementById('item' +i).innerHTML = '<input id="editado" type="text" value="'+mochila[i]+'">'

}else{

    mochila[i] = document.getElementById('editado').value
    atualizarLista()
}


}