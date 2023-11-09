let num = [5, 8, 4]

num[3] = 7
num.push(6) //adiciona no final do array/vetor
// console.log(`Nosso vetor tem ${num.length} posições`)
// console.log(`Nosso vetor é ${num}`)
num.sort() //ordena o array
// console.log(`Nosso vetor ordenado é ${num}`)

console.log('Nosso vetor é: ')
for (let i = 0; i < num.length; i++) {
    console.log(`[${i}] ${num[i]}`)
}

let n = 11
pos = num.indexOf(n)
console.log(`Localizando...`)
if (pos == -1) {
    console.log(`${n} não encontrado!`)
}else{
    console.log(`O ${n} está na posição: ${pos}`)
}
