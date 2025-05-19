import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const serviciosStore = defineStore('serviciosStore', {
    state: () => ({
        servicios: [],
        favoritos: [],
        favs: [],
    }),
    getters:{
        getServiciosVisibles: (state) => {
            return state.servicios.filter(servicio => servicio.MOSTRAR)
        },
        getServiciosFavs: (state) => {
          console.log('getServiciosFavs', state.favs)
            return state.favs
        },
        getTotalFavs: (state) => {
            return state.favs.length
        },
        esFav: state => index => state.favoritos.includes(index),
    },
    actions:{
        async cargarServicios () {
          if (this.servicios.length) return
          const response = await axios.get('/basurto.json') 
          this.servicios = response.data
        },
        toggleFavorito (index, servicio) {
          const pos = this.favoritos.indexOf(index)
          if (pos === -1) this.favoritos.push(index) &&  this.favs.push(servicio)  
          else this.favoritos.splice(pos, 1) && this.favs.splice(pos, 1)             
        }
    }
})
