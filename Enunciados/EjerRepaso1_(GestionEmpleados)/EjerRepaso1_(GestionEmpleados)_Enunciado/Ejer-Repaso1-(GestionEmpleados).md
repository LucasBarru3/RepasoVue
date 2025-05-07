
## Ejercicio Repaso 1: Gestión de Empleados

### Descripción

Crear una aplicación para gestionar información de empleados. Los datos de los empleados se cargarán desde un **fichero JSON** que está en local. 
La aplicación permitirá:
1.  **Cargar y mostrar**  la lista de empleados.
2.  **Filtrar empleados**  por departamento.
3.  **Calcular estadísticas**  básicas, como el salario promedio o el número de empleados por departamento.
4.  **Agregar nuevos empleados**  (los datos se añadirán al estado global, pero no es necesario persistirlos en el JSON).

La aplicación estará dividida en varios componentes, y se accederá a ellos mediante rutas. Además, se usará **Pinia** para gestionar el estado global de los empleados.
  
### **Estructura de la Aplicación**:

1.  **Componentes**:
    
    -   **HomeView**: Página principal que muestra un resumen de la empresa (total de empleados, salario promedio, etc.).
    -   **EmployeeList**: Componente que muestra la lista de empleados y permite filtrarlos por departamento.
    -   **EmployeeStats**: Componente que muestra estadísticas, como el salario promedio o el número de empleados por departamento.
    -   **AddEmployee**: Componente con un formulario para agregar nuevos empleados.
        
2.  **Rutas**:
    -   `/`: Muestra el componente  `HomeView`.
    -   `/employees`: Muestra el componente  `EmployeeList`.
    -   `/stats`: Muestra el componente  `EmployeeStats`.
    -   `/add-employee`: Muestra el componente  `AddEmployee`.
        
3.  **Pinia Store**:
    -   Crear un store llamado  `useEmployeeStore`  que gestione el estado de los empleados.
    -   El store debe incluir:
        -   Un estado (`state`) con un array de empleados.
        -   Acciones (`actions`) para cargar los datos desde el JSON, agregar nuevos empleados y filtrar empleados por departamento.
        -   Getters (`getters`) para calcular estadísticas (salario promedio, número de empleados por departamento, etc.).