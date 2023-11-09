// Função Recursiva
function fat(n){
    if (n == 1) {
        return 1
    } else {
        
        return n * fat(n-1)
    }
}

let n = 5
console.log(fat(n))