document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar elementos del DOM
    const tareaInput = document.getElementById('tareaInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const listaTareas = document.getElementById('listaTareas');
  
    // Función para agregar una tarea a la lista
    function agregarTarea() {
      const tareaTexto = tareaInput.value.trim(); // Obtener el valor del input y eliminar espacios en blanco al principio y al final
  
      if (tareaTexto !== '') {
        // Crear elementos HTML para la tarea y el botón de eliminación
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = tareaTexto;
  
        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'btn btn-danger btn-sm float-right';
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', function () {
          // Eliminar la tarea al hacer clic en el botón de eliminar
          li.remove();
        });
  
        // Agregar el botón de eliminar a la tarea
        li.appendChild(btnEliminar);
  
        // Agregar la tarea a la lista
        listaTareas.appendChild(li);
  
        // Limpiar el input después de agregar la tarea
        tareaInput.value = '';
      } else {
        alert('Por favor ingrese una tarea válida');
      }
    }
  
    // Evento click para agregar tarea
    agregarBtn.addEventListener('click', agregarTarea);
  });
  