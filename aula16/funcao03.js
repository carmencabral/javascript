let tab = []
let strtab = ""
let v = function(x) {
    for (let i = 0; i < 10; i++) {
        tab[i] = x*(i+1)
        strtab += `${x} x ${i+1} = ${tab[i]}\n` 
    }
    return strtab
}

let n = 5
console.log(`Tabuada do ${n}:`)
console.log(`${v(n)}`)


// let tab = []

// let v = function(x) {
//     for (let i = 0; i < 10; i++) {
//         tab[i] = x*(i+1)
//     }
//     return tab
// }

// let n = 5
// console.log(`Tabuada do ${n}:`)
// console.log(`${v(n)}`)

//Resultado
//Tabuada do 5:
//5,10,15,20,25,30,35,40,45,50