### Ejercicio: **Gestión de Tareas con Componentes**

Diseñar una app  que permita gestionar una lista de tareas. La app utilizara 'emits'  para enviar información desde un componente hijo hacia su componente padre, simulando la creación y eliminación de tareas.

----------

### **Descripción del ejercicio**

La aplicación tendrá dos componentes principales:

1.  **`TaskList` (Componente Padre)**:
    -   Mostrará una lista de tareas.
    -   Recibirá nuevas tareas desde un componente hijo y las agregará a la lista.
    -   Permitirá eliminar tareas de la lista.
    
2.  **`TaskInput` (Componente Hijo)**:
    -   Contendrá un formulario para añadir una nueva tarea.
    -   Emitirá un evento con la tarea ingresada al componente padre.
