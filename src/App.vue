<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import { RouterView } from 'vue-router'
import Navbar from './components/layouts/Navbar.vue'
import Footer from './components/layouts/Footer.vue'

//import ImageGenerator from './components/ImageGenerator.vue'
//import { RouterLink } from 'vue-router'
const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
   getInstruments()
})
</script>

<template>
  <Navbar v-if="!$route.meta.hideNavbar"  />
  <div id="app">
    <!-- <ImageGenerator /> -->
  </div>
  <!-- <RouterView /> -->
  <router-view />
  
  
  

  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
  </ul>

  <Footer  v-if="!$route.meta.hideFooter"  />

</template>


<!-- <script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

// ✅ Reactive states
const instruments = ref<{ id: number; name: string }[]>([])
const loading = ref(true)
const errorMessage = ref('')

// ✅ Fetch instruments
async function getInstruments() {
  try {
    const { data, error } = await supabase.from('instruments').select()

    if (error) throw error
    instruments.value = data || []
  } catch (err: any) {
    errorMessage.value = err.message || 'Failed to fetch instruments.'
  } finally {
    loading.value = false
  }
}

// ✅ Fetch on mount
onMounted(() => {
  getInstruments()
})
</script>

<template>
  <main class="p-6">
    <h1 class="text-2xl font-bold mb-4">🎸 Instruments</h1>

    <div v-if="loading">Loading...</div>
    <div v-else-if="errorMessage" class="text-red-600">
      {{ errorMessage }}
    </div>
    <ul v-else>
      <li
        v-for="instrument in instruments"
        :key="instrument.id"
        class="border-b py-2"
      >
        {{ instrument.name }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: auto;
}
</style> -->
