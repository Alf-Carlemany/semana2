function toggleText() {
    var textoOculto = document.querySelector('.additional');
    textoOculto.classList.toggle('hidden');

    if (textoOculto.classList.contains('hidden'))
        document.querySelector('#cambioText').innerText = 'Seguir leyendo';
    else
        document.querySelector('#cambioText').innerText = 'Ocultar texto';
}