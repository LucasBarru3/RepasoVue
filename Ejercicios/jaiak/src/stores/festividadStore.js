
import { defineStore } from 'pinia'
import axios from 'axios'
export const usefestividadStore = defineStore('usefestividadStore', {
  state: () => ({
    festividades: [],
  }),
  actions: {
    async cargarFestividades() {
      if (this.festividades.length > 0) return //PARA QUE NO SE CARGUE MAS DE UNA VEZ

      const response = await axios.get('/festividades.json')
      this.festividades = response.data.map(festividad => ({
        ...festividad,
        asistido: false
      }))
      console.log('cargado solo una vez')
    },
    cambiarAsistido(id) {
      const festividad = this.festividades.find(f => f.id === id)
      if (festividad) {
        festividad.asistido = !festividad.asistido
      }
    },
    borrarFestividad(Id){
        this.festividades = this.festividades.filter((festividad) => festividad.id != Id) 
    }
  },
  getters:{
    getProximasFestividades: (state) => {
      const hoy = new Date().toISOString().split('T')[0] // formato YYYY-MM-DD
      return state.festividades
        .filter(f => f.fecha >= hoy)
        .sort((a, b) => a.fecha.localeCompare(b.fecha))
    },
    getTotalFestividades: (state) => {
      return state.festividades.length
    },
    getFestividadesAsistidas: (state) => {
      return state.festividades.filter(f => f.asistido).length
    },
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
    getPresupuestoPromedio : (state) => {
      const presupuestosTotales = state.festividades.reduce((promedioTotal, festividad)=> promedioTotal+festividad.presupuesto,0 )
      const calculo = presupuestosTotales / state.festividades.length;
      return calculo.toFixed(2);
    },
  }

})
