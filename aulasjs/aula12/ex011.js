var idade = 64
console.log (`Você tem ${idade} anos!`)
if (idade < 16) {
    console.log(`Nao Vota`)
} else if (idade < 18 || idade > 65){ 
        console.log(`Voto Opcional`)
} else {
    console.log (`Voto Obrigatório`)
}

//CONDICAO ANINHADA