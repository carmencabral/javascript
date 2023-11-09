function somar(n1=0, n2=0){
    return n1 + n2
}

function subtrair(n1=0, n2=0){
    return n1 - n2
}

function multiplicar(n1=0, n2=0){
    return n1 * n2
}

let n1 = 8 
let n2 = 3
console.log(`${n1} + ${n2} = ${somar(n1, n2)}`)
console.log(`${n1} - ${n2} = ${subtrair(n1, n2)}`)
console.log(`${n1} * ${n2} = ${multiplicar(n1, n2)}`)
