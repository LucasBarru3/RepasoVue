import { defineStore } from 'pinia'
import axios from 'axios'

export const usefestividadStore = defineStore('usefestividadStore', {
  state: () => ({
    festividades: [], // Lista de festividades con sus datos
  }),

  actions: {
    // ✅ Carga las festividades desde un JSON solo si no se han cargado antes
    async cargarFestividades() {
      if (this.festividades.length > 0) return // Evita cargar más de una vez

      const response = await axios.get('/festividades.json')
      this.festividades = response.data.map(festividad => ({
        ...festividad,
        asistido: false // Añade un campo nuevo para marcar asistencia
      }))
      console.log('cargado solo una vez')
    },

    // ✅ Cambia el valor de "asistido" (true/false) de una festividad por su ID
    cambiarAsistido(id) {
      const festividad = this.festividades.find(f => f.id === id)
      if (festividad) {
        festividad.asistido = !festividad.asistido
      }
    },

    // ✅ Elimina una festividad por su ID
    borrarFestividad(Id){
      this.festividades = this.festividades.filter((festividad) => festividad.id != Id) 
    }
  },

  getters: {
    // ✅ Devuelve las festividades con fecha igual o posterior a hoy, ordenadas por fecha
    // (filtrar por campo 'fecha' y ordenar de forma ascendente)
    getProximasFestividades: (state) => {
      const hoy = new Date().toISOString().split('T')[0] // formato YYYY-MM-DD
      return state.festividades
        .filter(f => f.fecha >= hoy)
        .sort((a, b) => a.fecha.localeCompare(b.fecha))
    },

    // ✅ Devuelve el número total de festividades cargadas
    getTotalFestividades: (state) => {
      return state.festividades.length
    },

    // ✅ Devuelve el número de festividades marcadas como "asistido = true"
    getFestividadesAsistidas: (state) => {
      return state.festividades.filter(f => f.asistido).length
    },

    // ✅ Devuelve el/los municipio/s con más festividades
    // (conteo por campo 'municipio', y devuelve los que tengan el valor máximo)
    getMunicipiosmasFestividades: (state) => {
      const municipios = {}
      state.festividades.forEach(f => {
        if (municipios[f.municipio]) {
          municipios[f.municipio]++
        } else {
          municipios[f.municipio] = 1
        }
      })
      const maxFestividades = Math.max(...Object.values(municipios))
      return Object.keys(municipios).filter(m => municipios[m] === maxFestividades)
    },

    // ✅ Devuelve el presupuesto medio de todas las festividades
    // (media aritmética del campo 'presupuesto')
    getPresupuestoPromedio: (state) => {
      const presupuestosTotales = state.festividades.reduce(
        (total, festividad) => total + festividad.presupuesto, 0
      )
      const promedio = presupuestosTotales / state.festividades.length
      return promedio.toFixed(2) // redondeado a 2 decimales
    },
  }
})
