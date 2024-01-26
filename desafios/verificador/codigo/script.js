function verificar() {
    var nascimento = document.getElementById("data").value
    var dataNascimento = new Date(nascimento)
    var anoNascimento = dataNascimento.getFullYear()
    var mesNascimento = dataNascimento.getMonth()
    var diaNascimento = dataNascimento.getDate()
    var hoje = new Date()
    var anoAtual = hoje.getFullYear()
    var mesAtual = hoje.getMonth()
    var diaAtual = hoje.getDate()
    var idade = anoAtual - anoNascimento

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    var sexo = document.querySelector('input[name="sexo"]:checked').value 
    var imagemAleatoria = Math.floor(Math.random() * 6)

    if (sexo = "Masculino" && idade > 0 && idade < 6){

    }else if (idade > 5){

    }else if (idade > 12){

    }else if (idade > 17){

    }else if (idade > 39){

    }

    if (sexo = "Feminino" && idade > 0 && idade < 6){

    }else if (idade > 5){

    }else if (idade > 12){

    }else if (idade > 17){

    }else if (idade > 39){

    }

    document.getElementById("resultado").innerText = `Sua idade é ${idade} anos`
    
}
    document.getElementById("data").addEventListener("click", verificar)
