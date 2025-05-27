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
        console.log('Validación de nombre: falló');
        valido = false;
    } else {
        console.log('Validación de nombre: correcta');
    }
    

    // Validar edad entre 18 y 100
    if (isNaN(edad) || edad < 18 || edad > 100) {
        errorEdad.textContent = 'Ingrese una edad válida (entre 18 y 100)';
        console.log('Validación de edad: falló');
        valido = false;
    } else {
        console.log('Validación de edad: correcta');
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
            const confirmar = confirm('¿Estás seguro de que deseas eliminar este registro?');
            if (confirmar) {
            cuerpoTabla.removeChild(fila);
            console.log('Fila eliminada exitosamente.');
            } else {
                console.log('Eliminación cancelada por el usuario.');
            }
        };
        celdaAccion.appendChild(btnEliminar);

        const btnActualizar = document.createElement('button');
        btnActualizar.textContent = 'Actualizar';
        btnActualizar.onclick = function () {
            const nuevoNombre = prompt('Editar nombre:', celdaNombre.textContent);
            const nuevaEdad = prompt('Editar edad:', celdaEdad.textContent);

            if (nuevoNombre !== null && nuevaEdad !== null) {
                celdaNombre.textContent = nuevoNombre.trim();
                celdaEdad.textContent = nuevaEdad.trim();
                console.log('Nuevos datos:', nuevoNombre,",", nuevaEdad);
            } else {
                console.log('Actualización cancelada');
            }
        };
        
        celdaAccion.appendChild(btnActualizar);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEdad);
        fila.appendChild(celdaAccion);

        cuerpoTabla.appendChild(fila);
        console.log('Fila agregada');

        //Limpiar
        document.getElementById('miFormulario').reset();
        console.log('Se limpió el formulario');
    } else {
        console.log('Fallo en validacion general, no se agregan datos');
    }
}
