let num = [5, 8, 9, 10, 1, 14]
num.push(3)
num.sort((a, b) => a - b)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if(pos==-1)
    console.log('O valor não foi encontrado!')
else
    console.log(`O valor 4 está na posição ${pos}`)