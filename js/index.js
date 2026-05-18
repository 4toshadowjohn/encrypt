async function cargar (formulario) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    try {
        const res = await fetch ("./secciones/" + formulario + ".html")
        const html = await res.text()
        document.getElementById("contenido").innerHTML = html
    } catch (error) {
        console.error('error', error)
    }
}

