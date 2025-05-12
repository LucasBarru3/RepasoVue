<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const pokemones = ref({ results: [] })
const name = ref('')
const type = ref('')
const ability = ref('')
const filtroNombre = ref('')
const filtroTipo = ref('')

async function getPokemons() {
  const response = await axios.get('/pokemons.json')
  if (response.data != null) {
    pokemones.value = response.data
  } else {
    console.log('Error')
  }
}

function deletePokemon(index) {
  pokemones.value.results.splice(index, 1)
}

function addPokemon() {
  const newPokemon = {
    name: name.value,
    type: type.value,
    ability: ability.value
  }
  pokemones.value.results.push(newPokemon)
  name.value = ''
  type.value = ''
  ability.value = ''
}

// Filtro reactivo por nombre y tipo
const pokemonesFiltrados = computed(() => {
  return pokemones.value.results.filter(pokemon => {
    const coincideNombre = pokemon.name.toLowerCase().includes(filtroNombre.value.toLowerCase())
    const coincideTipo = !filtroTipo.value || pokemon.type === filtroTipo.value
    return coincideNombre && coincideTipo
  })
})

// Obtener lista de tipos únicos para el <select>
const tiposUnicos = computed(() => {
  const tipos = pokemones.value.results.map(p => p.type)
  return [...new Set(tipos)].sort()
})

onMounted(getPokemons)
</script>

<template>
  <div>
    <input v-model="filtroNombre" placeholder="Buscar por nombre..." />
    
    <select v-model="filtroTipo">
      <option value="">Todos los tipos</option>
      <option v-for="tipo in tiposUnicos" :key="tipo" :value="tipo">
        {{ tipo }}
      </option>
    </select>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Habilidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pokemon, index) in pokemonesFiltrados" :key="index">
          <td>{{ pokemon.name }}</td>
          <td>{{ pokemon.type }}</td>
          <td>{{ pokemon.ability }}</td>
          <td><button @click="deletePokemon(index)">Borrar</button></td>
        </tr>
      </tbody>
    </table>

    <form @submit.prevent="addPokemon">
      <input type="text" v-model="name" placeholder="Nombre" required />
      <input type="text" v-model="type" placeholder="Tipo" required />
      <input type="text" v-model="ability" placeholder="Habilidad" required />
      <button type="submit">Agregar Pokémon</button>
    </form>
  </div>
</template>
