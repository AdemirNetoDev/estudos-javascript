

function carregar() {

    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()

    //var hora = data.getHours()

    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    msg.style.textAlign = 'center' 

    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {
        document.body.style.background = '#b9846f'

    } else {
        document.body.style.background = '#515154'
    }
}
