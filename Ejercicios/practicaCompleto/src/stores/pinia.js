
import { defineStore } from 'pinia';
import axios from 'axios';

export const useLibrosStore = defineStore('libros', {

  state: () => ({

    libros: [],
    filtroSelect: '',
    filtroInput: ''

  }),

  getters: {

    // GETTERS HOME
    autores: (state) => {
      const autoresLibros = state.libros.map(libro => libro.autor);

      return [...new Set(autoresLibros)];
    },

    librosFiltrados: (state) => {

      if (!state.filtroSelect) {
        return state.libros
      } else {

        return state.libros.filter((libro) => libro.autor.toLowerCase() === state.filtroSelect.toLowerCase());

      }

    },

    librosFiltradosInput: (state) => {

      if (!state.filtroInput) {
        return state.libros
      } else {

        return state.libros.filter((libro) => libro.autor.toLowerCase().includes(state.filtroInput.toLowerCase()));

      }

    },

    librosOrdenados: (state) => {

      // PARA ORDENAR DE MANERA DISTINTA, CAMBIAR LA B POR EL A DESPUES DE LA =>
      
      // POR STRING 
      return state.libros.sort((a, b) => a.titulo.localeCompare(b.titulo));

      // POR INTEGER
      return state.libros.sort((a, b) => a.id - b.id);

      // POR FECHA
      return state.libros.sort((a, b) => new Date(a.publicacion) - new Date(b.publicacion));

    },

    // ################

    // GETTERS ESTADISTICAS

    librosTotales: (state) => {

      return state.libros.length

    },

    librosLeidos: (state) => {

      return state.libros.filter((libro) => libro.leido === true).length;

    },

    autoresTotales: (state) => {

      const autores = state.libros.map((libro) => libro.autor);
      const setAutores = [...new Set(autores)];
      return setAutores.length;

    },

    autoresMultiples: (state) => {

      const autores = state.libros.reduce((autores, libro) => {

        autores[libro.autor] = (autores[libro.autor] || 0) + 1;
        return autores;

      }, {})

      return Object.entries(autores)  // Convierte el objeto en un array de [municipio, count]
        .filter(([_, count]) => count > 1) // Filtra los municipios con más de una festividad
        .map(([autor]) => autor);  // Devuelve solo el nombre del municipio

    },

    librosPosteriores: (state) => {

      // PARA HACERLO CON LA FECHA ACTUAL
      // const hoy = new Date();
      // hoy.setHours(0, 0, 0, 0);

      const fechaLimite = new Date('2000-01-01');

      return state.libros.filter((libro) =>
        new Date(libro.publicacion) > fechaLimite
      );

    },

    promedioAntiguedad: (state) => {
      const anoActual = new Date().getFullYear();

      if (state.libros.length === 0) return 0;

      const totalAntiguedad = state.libros.reduce((acumulado, libro) => {
        const anoPublicacion = new Date(libro.publicacion).getFullYear();
        const antiguedad = anoActual - anoPublicacion;
        return acumulado + antiguedad;
      }, 0);

      return (totalAntiguedad / state.libros.length).toFixed(2); // Devuelve promedio con 2 decimales
    }

    // ################


  },

  actions: {

    async cargarLibros() {

      if (this.libros.length > 0) return;


      try {
        const response = await axios.get('/libros/libros.json');

        const listaLibros = response.data.map(libro => {
          return { ...libro, leido: false };
        })

        this.libros = listaLibros;

      } catch (error) {
        console.error(error);
      }

    },

    cambiarEstado(id) {

      const libro = this.libros.find((libro) => libro.id === id);

      libro.leido = !libro.leido

      console.log(this.libros);

    },

    eliminar(id) {

      this.libros = this.libros.filter((libro) => libro.id != id)

    },

    agregarLibro(libro){

      this.libros.push(libro);

      console.log(this.libros);

    }

  }

})
