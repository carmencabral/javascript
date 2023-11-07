var idade = 18
if (idade < 16) {
    console.log(`${idade} anos: Não vota.`)
} else {
    if (idade < 18 || idade >= 70){
        console.log(`${idade} anos: Voto opcional.`)
    } else {
        console.log(`${idade} anos: Voto obrigatório.`)
    }
}