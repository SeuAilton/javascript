let agora = new Date()
let hora = agora.getHours()
if (hora < 6) {
    console.log('É madrugada, vai durmi!')
}else if (hora < 12) {
    console.log(`São ${hora}h. Bom dia!`)
}else if (hora < 19) {
    console.log(`São ${hora}h. Boa tarde!`)
}else {
    console.log(`São ${hora}h. Boa noite!`)
}