function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value < 1 || num.value > 12) {
        tab.innerHTML = ('Insira um número no intervalo de 1 a 12!')
    } else {

        for(c = 1; c <= 10; c++){
            var calc = String(c) + ' x ' + num.value + ' = ' + c * Number(num.value);
            var resultado = document.createElement('p')
            resultado.innerText = calc
            tabuada.appenChild(resultado)
    }
                            }