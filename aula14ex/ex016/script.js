function contar() {
    var inicio = document.getElementById("txtInicio")
    var fim = document.getElementById("txtFim")
    var passo = document.getElementById("txtPasso")
    var res = document.getElementById("resultado")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando: <p>"
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if (i <= f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}` 
            }
        } else {
            //Contagem decrescente
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }      
        res.innerHTML += "\u{1F3C1} </p>"
    }
}