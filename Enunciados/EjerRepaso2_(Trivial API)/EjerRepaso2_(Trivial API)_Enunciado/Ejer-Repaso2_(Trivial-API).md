


### **Desarrollo de una Aplicación de Trivia con Vue.js 3, Vue Router, Pinia y la API de Open Trivia**

#### **Objetivo del ejercicio:**

El objetivo de este ejercicio es desarrollar una **aplicación de trivial** en la que los usuarios puedan personalizar la experiencia de juego seleccionando la **categoría**, el **número de preguntas** y la **dificultad**. Usando **Vue.js 3**, **Vue Router** y **Pinia**, los estudiantes gestionarán la navegación, el estado global y la interacción con la **[API de Open Trivia Database](https://opentdb.com/api_config.php)** para obtener preguntas personalizadas. Además, aprenderán a construir dinámicamente la URL de la API según las elecciones del usuario.

### **Requisitos del ejercicio:**

1.  **Vue Router** para gestionar la navegación entre las diferentes páginas de la aplicación.
2.  **Pinia** para manejar el estado global, como la puntuación del jugador, las preguntas y las respuestas.
3.  **API de Open Trivia Database** para obtener preguntas de trivia personalizadas basadas en las opciones elegidas por el usuario (categoría, número de preguntas y dificultad).
4.  El usuario podrá elegir la **categoría**, el **número de preguntas** y la **dificultad** antes de empezar el juego.

### **Descripción de las Páginas de la Aplicación:**

1.  **Página de Inicio (`HomePage.vue`)**:
    -   Permite al usuario seleccionar la **categoría**, el **número de preguntas** y la **dificultad**.
    -   Se genera la URL dinámica para obtener las preguntas desde la API de Open Trivia.
    -   Al hacer clic en el botón "Comenzar", el usuario es redirigido a la **Página de Preguntas**.
    
2.  **Página de Preguntas (`QuestionPage.vue`)**:
    -   Muestra las preguntas de trivia obtenidas desde la API según las elecciones del usuario.
    -   El jugador responde las preguntas y avanza a la siguiente.
    -   Al finalizar todas las preguntas, el usuario es redirigido a la **Página de Resultados**.
    
3.  **Página de Resultados (`ResultPage.vue`)**:
    -   Muestra la puntuación final del jugador.
    -   El jugador puede reiniciar el juego y elegir nuevamente las opciones.