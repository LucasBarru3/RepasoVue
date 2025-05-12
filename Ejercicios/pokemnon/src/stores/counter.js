import { defineStore } from 'pinia'
import axios from 'axios'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemones: [],
    filtroTipo: ''
  }),
  actions: {
    async cargarPokemones() {
      const response = await axios.get('/pokemons.json')
      this.pokemones = response.data.results
    }
  },
  getters: {
    pokemonesFiltrados: (state) => {
      if (!state.filtroTipo) return state.pokemones
      return state.pokemones.filter(p =>
        p.type.toLowerCase().includes(state.filtroTipo.toLowerCase())
      )
    }
  }
})
