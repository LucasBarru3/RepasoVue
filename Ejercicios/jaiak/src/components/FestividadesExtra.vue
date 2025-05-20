<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold text-center">Gestión de Festividades</h1>

    <!-- 📊 Estadísticas principales -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="bg-white shadow p-4 rounded">
        <h2 class="font-semibold">Total</h2>
        <p>{{ pinia.getTotalFestividades }}</p>
      </div>
      <div class="bg-white shadow p-4 rounded">
        <h2 class="font-semibold">Asistidas</h2>
        <p>{{ pinia.getFestividadesAsistidasNum }} / {{ pinia.getTotalFestividades }} ({{ pinia.getPorcentajeAsistencia }})</p>
      </div>
      <div class="bg-white shadow p-4 rounded">
        <h2 class="font-semibold">Presupuesto medio</h2>
        <p>{{ pinia.getPresupuestoPromedio }} €</p>
      </div>
      <div class="bg-white shadow p-4 rounded">
        <h2 class="font-semibold">Municipios más frecuentes</h2>
        <ul>
          <li v-for="m in pinia.getMunicipiosmasFestividades" :key="m">{{ m }}</li>
        </ul>
      </div>
      <div class="bg-white shadow p-4 rounded">
        <h2 class="font-semibold">Festividad más cara</h2>
        <p v-if="pinia.getFestividadMasCara">
            {{ pinia.getFestividadMasCara.nombre }} - {{ pinia.getFestividadMasCara.presupuesto }} €
        </p>
        <p v-else>No hay festividades aún.</p>
    </div>
      <div class="bg-white shadow p-4 rounded">
        <h2 class="font-semibold">¿Hay festividad hoy?</h2>
        <p>{{ hayHoy ? 'Sí 🎉' : 'No 😴' }}</p>
      </div>
    </div>

    <!-- 📅 Lista de festividades -->
    <table class="min-w-full bg-white border shadow rounded mt-6">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="px-4 py-2">Nombre</th>
          <th class="px-4 py-2">Fecha</th>
          <th class="px-4 py-2">Municipio</th>
          <th class="px-4 py-2">Presupuesto</th>
          <th class="px-4 py-2">Asistido</th>
          <th class="px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="f in pinia.festividades" :key="f.id" class="border-t">
          <td class="px-4 py-2">{{ f.nombre }}</td>
          <td class="px-4 py-2">{{ f.fecha }}</td>
          <td class="px-4 py-2">{{ f.municipio }}</td>
          <td class="px-4 py-2">{{ f.presupuesto }} €</td>
          <td class="px-4 py-2">{{ f.asistido ? '✅' : '❌' }}</td>
          <td class="px-4 py-2 space-x-2">
            <button @click="cambiarAsistido(f.id)" class="text-blue-500 hover:underline">Cambiar</button>
            <button @click="pinia.borrarFestividad(f.id)" class="text-red-500 hover:underline">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 🔘 Botones de acción -->
    <div class="space-x-4 mt-6">
      <button @click="marcarTodasAsistidas" class="bg-green-500 text-white px-4 py-2 rounded">Marcar todas</button>
      <button @click="vaciarFestividades" class="bg-red-500 text-white px-4 py-2 rounded">Vaciar</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import {usefestividadStore} from '@/stores/festividadStore.js'
const pinia = usefestividadStore()

onMounted(() => {
  pinia.cargarFestividades()
})

// Actions
const cambiarAsistido = pinia.cambiarAsistido
const marcarTodasAsistidas = pinia.marcarTodasAsistidas
const vaciarFestividades = pinia.vaciarFestividades

const hayHoy = pinia.hayFestividadHoy
</script>

<style scoped>
table th,
table td {
  text-align: left;
}
</style>
