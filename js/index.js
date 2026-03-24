async function cargar (formulario) {
    try {
        const res = await fetch ("./secciones/" + formulario + ".html")
        const html = await res.text()
        document.getElementById("contenido").innerHTML = html
    } catch (error) {
        console.error('error', error)
    }
    
    
}





 /*
function emcryp ()  {
    let val = document.getElementById('cod')
    let valdes = document.getElementById('resul')
    let res = []

        for(let caracter of val.value)
        {
            const carac = esCaracterNumerico(caracter)
            if (carac == true) {
                    let numeber = Number(caracter)
                    let rest = numeber - 2
                    if (rest == -1) {
                        rest = 9
                        let des = String(rest)
                        res.push(des)
                    } else if (rest == -2) {
                        rest = 8
                        let des = String(rest)
                        res.push(des)
                    } else {
                        let des = String(rest)
                        res.push(des)
                    }
            } else {
                const letra = caracter.charCodeAt(0)
                let aculetra = letra - 1
                const letraAsc = String.fromCharCode(aculetra)
                console.log(letra, aculetra)
                res.push(letraAsc)
                    }
                   
      
        }
        alert(res.join(''))
}

const boton = document.getElementById('miboton')
boton.addEventListener('click', emcryp)


function esCaracterNumerico(caracter) {
    return /\d/.test(caracter)
}
    */