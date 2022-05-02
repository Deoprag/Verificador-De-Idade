function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#nasc')
    var res = window.document.querySelector('div#res')

    if ( (fano.value.length < 4) || (Number(fano.value) < 1920) || (fano.value > ano) ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if ( (sexo[0].checked) ) {
            genero = 'homem'
            if ( (idade >= 0) && (idade < 4) ) {
                //  BEBE
                img.setAttribute('src', 'assets/bebem.png')
            } else if ( (idade < 10) ) {
                // CRIANÇA
                img.setAttribute('src', 'assets/criancam.png')
            } else if ( (idade < 18) ) {
                // ADOLESCENTE
                img.setAttribute('src', 'assets/adolescentem.png')
            } else if ( (idade < 25) ) {
                // JOVEM
                img.setAttribute('src', 'assets/jovemm.png')
            } else if ( (idade < 50) ) {
                // ADULTO
                img.setAttribute('src', 'assets/adultom.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'assets/idosom.png')
            }
        } else if ( (sexo[1].checked) ) {
            genero = 'mulher'
            if ( (idade >= 0) && (idade < 4) ) {
                //  BEBE
                img.setAttribute('src', 'assets/bebef.png')
            } else if ( (idade < 10) ) {
                // CRIANÇA
                img.setAttribute('src', 'assets/criancaf.png')
            } else if ( (idade < 18) ) {
                // ADOLESCENTE
                img.setAttribute('src', 'assets/adolescentef.png')
            } else if ( (idade < 25) ) {
                // JOVEM
                img.setAttribute('src', 'assets/jovemf.png')
            } else if ( (idade < 50) ) {
                // ADULTO
                img.setAttribute('src', 'assets/adultof.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'assets/idosof.png')
            }
        }
        res.innerHTML = `<p>Esta pessoa é um(a) ${genero} de ${idade} anos!</p>`
        res.appendChild(img) 
    }
}