function validar() {
    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value);

    const errorNombre = document.getElementById('errorNombre');
    const errorEdad = document.getElementById('errorEdad');

    //Limpiar
    errorNombre.textContent = '';
    errorEdad.textContent = '';

    let valido = true;

    // Validar nombre (incluye tildes y ñ)
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (nombre === '' || !regexNombre.test(nombre)) {
        errorNombre.textContent = 'Ingrese un nombre válido (solo letras)';
        valido = false;
    }

    // Validar edad entre 18 y 100
    if (isNaN(edad) || edad < 18 || edad > 100) {
        errorEdad.textContent = 'Ingrese una edad válida (entre 18 y 100)';
        valido = false;
    }

    // Agregar a la tabla
    if (valido) {
        const cuerpoTabla = document.getElementById('cuerpoTabla');
        const fila = document.createElement('tr');

        const celdaNombre = document.createElement('td');
        celdaNombre.textContent = nombre;

        const celdaEdad = document.createElement('td');
        celdaEdad.textContent = edad;

        const celdaAccion = document.createElement('td');
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = function () {
            cuerpoTabla.removeChild(fila);
        };
        celdaAccion.appendChild(btnEliminar);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEdad);
        fila.appendChild(celdaAccion);

        cuerpoTabla.appendChild(fila);

        //Limpiar
        document.getElementById('miFormulario').reset();
    }
}
