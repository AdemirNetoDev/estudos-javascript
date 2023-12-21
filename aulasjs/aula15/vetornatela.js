let valores = [8, 1, 7, 4, 2, 9]

/*MANEIRA BURRA:
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

//MANEIRA INTELIGENTE:

/*
for(let pos = 0;pos < valores.length;pos++){
    console.log('A posicao '+pos +' tem o valor '+ valores[pos])
}
*/

//MANEIRA MAIS INTELIGENTE E SIMPLIFICADA:
valores.sort()
for(let pos in valores) {
    console.log('A posicao '+pos +' tem o valor '+ valores[pos])
}