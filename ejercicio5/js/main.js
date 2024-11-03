function initList() {
    const elementosIniciales = [
        'Lorem ipsum dolor sit amet',
        'Consectetuer adipiscing elit',
        'Sed mattis enim vitae orci',
        'Phasellus libero',
        'Maecenas nisl arcu'
    ];

    elementosIniciales.forEach(texto => {
        addListItem(texto);
    });
}

// Función añadir elementos
function addListItem(texto) {
    var lista = document.getElementById('lista'); 
    var nuevoElemento = document.createElement('li'); 
    nuevoElemento.classList.add('list-group-item'); 

    // Nuevo li
    nuevoElemento.innerText = texto;
    lista.appendChild(nuevoElemento);
}

function addElement() {
    var texto = 'Elemento ' + (document.getElementById('lista').getElementsByTagName('li').length + 1);
    addListItem(texto);
}
