### Explorador de Fotos con Vue 3 y Axios

El objetivo de este ejercicio es construir una aplicación web que permita a los usuarios explorar fotos de un álbum utilizando una API pública. LA API esta en https://jsonplaceholder.typicode.com.

Es importante leer la documentacion de la API https://jsonplaceholder.typicode.com/guide/

La aplicación debe permitir:

1.  **Listar álbumes**: Mostrar una lista de 10 álbumes disponibles. Es conveniente mirar los datos recibidos
2.  **Ver fotos de un álbum**: Consultar y mostrar 10 fotos de un álbum seleccionado. A partir de la lista de albumes recibidos accederemos alas fotos de ese album a partir del endpoint https://jsonplaceholder.typicode.com/albums/1/photos donde 1 es el album de fotos. Ese es el valor que tendremos que buscar
3.  **Añadir una foto ficticia**: Simular la creación de una nueva foto en un álbum.
4.  **Eliminar una foto**: Simular la eliminación de una foto seleccionada.
