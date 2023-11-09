function gerar_tabuada(){
    var txtnum = window.document.getElementById("txtnum")
    var res = window.document.getElementById("res")
    var cbotab = window.document.getElementById("cbotab")

    var num = Number(txtnum.value)
    var produto = 0
    var strres = ""

    // Remove um elemento da combo:
    // cbotab.remove(0)

    if (txtnum.value == "") {
        alert("Por favor, digite um número!")
    }else{
        // Apaga todos os elementos da combo
        cbotab.options.length = 0
        for (let i = 0; i < 10; i++) {
            // Calcula
            produto = num * (i+1)
            // Guarda resultado numa string
            strres = String(num) + " x " + String(i+1) + " = " + String(produto)+" " 

            //Criar combo e adicionar resultado na combo
            var opt = document.createElement("option");
            opt.text = strres
            //Adiciona cada string numa posição
            cbotab.add(opt, cbotab.options[i]);
        }
    }    
}