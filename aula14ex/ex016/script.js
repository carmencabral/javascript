function contar(){
    var fini = document.getElementById("txtini")
    var ffim = document.getElementById("txtfim")
    var fpas = document.getElementById("txtpas")
    var res = document.getElementById("res")

    var ini = Number(fini.value)
    var fim = Number(ffim.value)
    var pas = Number(fpas.value)
    
    var cont = ini
    var strres = ""
    /*
    Validações
    *Não pode caixa vazia!
    Msg: Impossível contar!
    *Não pode passo 0.
    Alerta: Será usado 1.
    */
   if (fini.value == "" || ffim.value == "" || fpas.value == "") {
       res.innerHTML = "Impossível contar!"
   }
   else{
         if (pas == 0) {
            window.alert("Não pode passo 0. Será usado 1.")
            pas = 1
        }

        if (ini <= fim){
            for (ini; cont <= fim; pas) {
                strres += String(cont + "👉")
                cont += pas
            }
        } else{
            for (ini; cont >= fim; pas) {
                strres += String(cont + "👉")
                cont -= pas
            }
        }

        res.innerHTML = "Contando:" +"<br>" + strres + "🏁"
    }
}


/* SEM VALIDAÇÕES
function contar(){
    var fini = document.getElementById("txtini")
    var ffim = document.getElementById("txtfim")
    var fpas = document.getElementById("txtpas")
    var res = document.getElementById("res")

    var ini = Number(fini.value)
    var fim = Number(ffim.value)
    var pas = Number(fpas.value)
    
    var cont = ini
    var strres = ""
    for (ini; cont <= fim; pas) {
        strres += String(cont + "👉")
        cont += pas
    } 
    res.innerHTML = strres + "🏁"
}
*/
