function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formulario_ano = document.getElementById('txt_ano')
    let res = document.getElementById('res')
    if (formulario_ano.value.length == 0 || formulario_ano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let formulario_sexo = document.getElementsByName('rad_sexo')
        let idade = ano - Number(formulario_ano.value)
        let genero = ''
        let img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (formulario_sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'arquivos/CRIANCA_MENINO.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'arquivos/JOVEM_HOMEM.jpg')
            } else if (idade  < 50) {
                //ADULTO
                img.setAttribute('src', 'arquivos/ADULTO_HOMEM.png')
            } else {
                //VELHO
                img.setAttribute('src', 'arquivos/VELHO.png')
            }
        } else if (formulario_sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'arquivos/CRIANCA_MENINA.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'arquivos/JOVEM_MULHER.jpg')
            } else if (idade  < 50) {
                //ADULTO
                img.setAttribute('src', 'arquivos/ADULTO_MULHER.jpg')
            } else {
                //VELHO
                img.setAttribute('src', 'arquivos/VELHA.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} | Idade: ${idade} anos.`
        res.appendChild(img)
    }
}    