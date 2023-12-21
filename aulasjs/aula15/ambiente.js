let num = [5, 2, 7, 1]
num.sort()
num.push(8)
console.log(num)
console.log('Nosso vetor tem ' + num.length +' posicoes.');
console.log('O primeiro valor do vetor é '+ num[0] + '.');
let pos = num.indexOf(8)

if (pos == 1){
    console.log('O valor nao foi encontrado!')
} else {
    console.log('O valor está na posicao '+ pos)
}




