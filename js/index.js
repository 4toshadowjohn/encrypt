async function cargar (formulario, btn) {
    try {
        const res = await fetch ("./secciones/" + formulario + ".html")
        const html = await res.text()
        document.getElementById("contenido").innerHTML = html
    } catch (error) {
        console.error('error', error)
    }
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

