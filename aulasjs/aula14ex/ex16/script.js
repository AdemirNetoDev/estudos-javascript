function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res') 

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Erro! Faltam dados...'
    } else {
        res.innerHTML = ('Contando..')
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f) { 
            //CONTAGEM CRESCENTE
            for(var c = i; c <= f;c += p) {
            res.innerHTML += `${c} \u{1F449} `
            }

        } else { 
            //CONTAGEM DECRESCENTE
            for(var c = i; c >= f;c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

    

}