let txtNum = document.getElementById("txtNum")
let fselNumeros = document.getElementById("selNumeros")
let res = document.getElementById("res")
let selNumeros = ""
let num = 0
let strnum = ""

function Adicionar(){
    num = txtNum.value
    //criar o elemento select
    selNumeros = document.createElement("option")
    //atribuir um id para o select
    selNumeros.setAttribute("id", "opcao")
    //VALIDAÇÕES
    strnum = `Valor ${num} adicionado.`
    //verifica se número está fora do intervalo
    //verifica se número já existe
    if (num < 1 || num > 100 || isList(strnum)){
        //se sim, não adiciona
        alert("Valor inválido ou já encontrado na lista!")
    } else {
        //adiciona número na lista
        let tam = fselNumeros.options.length
        selNumeros.text = `Valor ${num} adicionado.`
        fselNumeros.add(selNumeros, fselNumeros.options[tam-1])
        Finalizar()
    }
}

function isList(strnum){
    let res = false
    for (let i = 0; i < fselNumeros.options.length-1; i++) {
        if (strnum == String(fselNumeros.options[i].text)) {
            res = true
        } else {
            res = false
        }
    }
    return res
}

function totValores(){
    return fselNumeros.options.length-1
}

function maiorValor(){
    let maior = 0
    let num = 0
    for (let i = 0; i < fselNumeros.options.length-1; i++) {
        num = fselNumeros.options[i].text.split(" ", -1)[1]
        if (num > maior){
            maior = Number(num)
        }else num = maior
    }
    return maior
}

function menorValor(){
    let menor = 0
    let num = 0
    for (let i = 0; i < fselNumeros.options.length-1; i++) {
        num = fselNumeros.options[i].text.split(" ", -1)[1]
        if (i == 0) {
            menor = Number(num)
        }
        if (num < menor){
            menor = Number(num)
        }else num = menor
    }
    return menor
}

function somar(){
    let soma = 0
    for (let i = 0; i < fselNumeros.options.length-1; i++) {
        num = fselNumeros.options[i].text.split(" ", -1)[1]
        soma+=Number(num)
    }
    return soma
}

function calcularMedia(){
    return (somar()/totValores()).toFixed(2)
}

function Finalizar(){
    //lista vazia
    if (totValores() == 0) {
        alert("Adicione valores antes de finalizar!\nA lista está vazia!")
    } else {
        res.innerHTML = ""
        res.innerHTML="<p>Total de elementos: "+totValores()+"</p>"
        res.innerHTML+="<p>Maior valor: "+maiorValor()+"</p>"
        res.innerHTML+="<p>Menor valor: "+menorValor()+"</p>"
        res.innerHTML+="<p>Soma: "+somar()+"</p>"
        res.innerHTML+="<p>Média: "+calcularMedia()+"</p>"    
    }
    
}