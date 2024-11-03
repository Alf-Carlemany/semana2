document.addEventListener('DOMContentLoaded', function () {

    var enlaces = document.querySelectorAll('.parrafo a');

    //A cada enlace le asignamos el listener 
    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function (e) {
            var parrafo = this.previousElementSibling;

            //Oculto
            if (parrafo.style.display === 'none') {
                parrafo.style.display = 'block';
                this.innerText = 'Ocultar contenido';
            }
            //Visible
            else {
                parrafo.style.display = 'none';
                this.innerText = 'Mostrar contenido';
            }
        });
    });
});