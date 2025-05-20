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

    // ✅ Añade una festividad a la lista
    anadirFestividad(festividad) {
      this.festividades.push(festividad)
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
    },

    // ✅ Marca todas como asistidas
    marcarTodasAsistidas() {
      this.festividades.forEach(f => f.asistido = true)
    },

    // ✅ Reinicia el array (vacía la lista)
    vaciarFestividades() {
      this.festividades = []
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
    getFestividadesAsistidasNum: (state) => {
      return state.festividades.filter(f => f.asistido === true).length
    },

    // ✅ Devuelve las festividades marcadas como "asistido = true"
    getFestividadesAsistidas: (state) => {
      return state.festividades.filter(f => f.asistido === true)
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

    //EXTRAS
    // ✅ Devuelve el número de festividades por municipio (objeto tipo {Bilbao: 2, Barakaldo: 1, ...})
    getFestividadesPorMunicipio: (state) => {
      return state.festividades.reduce((acc, f) => {
        acc[f.municipio] = (acc[f.municipio] || 0) + 1
        return acc
      }, {})
    },

    // ✅ Devuelve un array con los presupuestos agrupados por municipio
    // [{ municipio: 'Bilbao', total: 3000 }, { municipio: 'Barakaldo', total: 1500 }, ...]
    getPresupuestoPorMunicipio: (state) => {
      const agrupado = {}
      state.festividades.forEach(f => {
        if (!agrupado[f.municipio]) {
          agrupado[f.municipio] = 0
        }
        agrupado[f.municipio] += f.presupuesto
      })
      return Object.entries(agrupado).map(([municipio, total]) => ({
        municipio,
        total
      }))
    },

    // ✅ Devuelve el top 3 de municipios con más presupuesto total
    getTop3MunicipiosPorPresupuesto: (state, getters) => {
      return getters.getPresupuestoPorMunicipio
        .sort((a, b) => b.total - a.total)
        .slice(0, 3)
    },

    // ✅ Devuelve la festividad con el mayor presupuesto
    getFestividadMasCara: (state) => {
      return state.festividades.reduce((max, f) => {
        return f.presupuesto > (max?.presupuesto || 0) ? f : max
      }, null)
    },

    // ✅ Devuelve el porcentaje de asistencia (asistidas / total) en porcentaje
    getPorcentajeAsistencia: (state) => {
      const total = state.festividades.length
      const asistidas = state.festividades.filter(f => f.asistido).length
      const porcentaje = total > 0 ? (asistidas / total) * 100 : 0
      return porcentaje.toFixed(1) + '%'
    },

    // ✅ Devuelve si hay al menos una festividad hoy
    hayFestividadHoy: (state) => {
      const hoy = new Date().toISOString().split('T')[0]
      return state.festividades.some(f => f.fecha === hoy)
    },

    // ✅ Devuelve todas las festividades agrupadas por fecha
    // Ej: { "2025-06-01": [ {...}, {...} ], "2025-06-02": [ {...} ] }
    getFestividadesPorFecha: (state) => {
      return state.festividades.reduce((acc, f) => {
        if (!acc[f.fecha]) acc[f.fecha] = []
        acc[f.fecha].push(f)
        return acc
      }, {})
    }
  }
})
