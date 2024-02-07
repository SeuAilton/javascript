function calcular() {
    var numero = parseInt(document.querySelector("#numero").value)
    var resultado = document.querySelector("#resultado")
    
    if (numero >= 1 && numero <= 10) {
        resultado.innerHTML = ''

        for (var numero_escolhido = 1; numero_escolhido <= 10; numero_escolhido++) {
            var option = document.createElement('option')
            option.text = `${numero} x ${numero_escolhido} = ${numero * numero_escolhido}`
            resultado.add(option)
        }

    } else {
        alert('[ERRO] Digite um número válido!')
    }
}

