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
        document.getElementById("imagem-img").src = `imagens/bebes/masculino/${imagemAleatoria}.png`
    }else if (idade > 5 && idade < 13){
        document.getElementById("imagem-img").src = `imagens/criancas/masculino/${imagemAleatoria}.png`
    }else if (idade > 12 && idade < 18){
        document.getElementById("imagem-img").src = `imagens/jovens/masculino/${imagemAleatoria}.png`
    }else if (idade > 17 && idade < 40){
        document.getElementById("imagem-img").src = `imagens/adultos/masculino/${imagemAleatoria}.png`
    }else if (idade > 39){
        document.getElementById("imagem-img").src = `imagens/velhos/masculino/${imagemAleatoria}.png`
    }

    if (sexo = "Feminino" && idade > 0 && idade < 6){
        document.getElementById("imagem-img").src = `imagens/bebes/feminino/${imagemAleatoria}.png`
    }else if (idade > 5 && idade < 13){
        document.getElementById("imagem-img").src = `imagens/criancas/feminino/${imagemAleatoria}.png`
    }else if (idade > 12 && idade < 18){
        document.getElementById("imagem-img").src = `imagens/jovens/feminino/${imagemAleatoria}.png`
    }else if (idade > 17 && idade < 40){
        document.getElementById("imagem-img").src = `imagens/adultos/feminino/${imagemAleatoria}.png`
    }else if (idade > 39){
        document.getElementById("imagem-img").src = `imagens/velhos/feminino/${imagemAleatoria}.png`
    }

    document.getElementById("resultado").innerText = `Sua idade é ${idade} anos`
    
}
    document.getElementById("data").addEventListener("click", verificar)
