var num = document.getElementById('txtn')
var res = document.getElementById('seltab')

function tabuada() {
    if (Number(num.value) < 1 || Number(num.value > 10)){
        window.alert('Digite um número entre 1 e 10.')
    } else {
        for(c = 1; c >= 1 && c <= 10; c++) {
            document.write(c)
        }
    }
}