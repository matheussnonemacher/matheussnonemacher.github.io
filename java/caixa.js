function pintarCaixa(){
    R = parseInt(document.getElementById("R_input").value)
    G = parseInt(document.getElementById("G_input").value)
    B = parseInt(document.getElementById("B_input").value)
    if(isNaN(R)){
        R = 0
    }
    if(isNaN(G)){
        G = 0
    }
    if(isNaN(B)){
        b = 0
    }
        document.getElementById('caixa').style.backgroudColor='rgb('+R+', '+G+', '+B+')'
}