function parimpar(n){
    let r = 0, res = 0
    if (n % 2 == 0) {
        // res = 0
        r = "par"
    } else {
        // res = 1
        r = "ímpar"
    }
    return r
}

let n = 5
console.log(parimpar(n))

// let n = 5
// if (parimpar(n) == 0) {
//     console.log(`${n} é par!`)    
// } else {
//     console.log(`${n} é ímpar!`)    
// }
