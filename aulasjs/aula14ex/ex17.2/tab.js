function Criar() {
    let num = parseInt(document.getElementById('num').value);
    let tabuada = document.getElementById('tab');
    let erro = document.getElementById('erro');

    if(num >= 1 && num <=10) {
        tabuada.innerHTML = '';

        for(let i = 1; i <=10; i++) {
            let res = num * i;
            let linha = document.createElement('tr');
            let coluna1 = document.createElement('td');
            let coluna2 = document.createElement('td');
            coluna1.textContent = num + ' x ' + i;
            coluna2.textContent = res;

            linha.appendChild(coluna1);
            linha.appendChild(coluna2);
            tabuada.appendChild(linha);
        }
        erro.textContent = '';
        document.getElementById('clear').style.display = 'block';
    } else {
        erro.textContent = 'Número inválido, digite um número entre 1 a 10.';
        error.className = 'erro'
    }
}

function Limpar() {
    document.getElementById('num').value = '';
    document.getElementById('tab').innerHTML = '';
    document.getElementById('erro').textContent = '';
    document.getElementById('erro').className = '';
    document.getElementById('clear').style.display = 'none';
}