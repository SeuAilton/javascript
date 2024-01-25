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

    document.getElementById("resultado").innerText = `Sua idade é ${idade} anos`
    
}
    document.getElementById("data").addEventListener("click", verificar)
