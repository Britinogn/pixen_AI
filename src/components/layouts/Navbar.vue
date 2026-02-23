<template>
  <nav class="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-blue-200/50 px-4 py-4 shadow-sm">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2">
        <span class="text-2xl md:text-3xl font-bold text-blue-800">🎨 Pixen AI</span>
      </RouterLink>

      <!-- Desktop Navigation Links -->
      <ul class="hidden md:flex items-center gap-8">
        <li>
          <RouterLink
            to="/generator"
            class="text-blue-700 hover:text-blue-900 font-semibold transition-colors px-3 py-2 rounded-md hover:bg-blue-50"
          >
            Generator
          </RouterLink>
        </li>
        <li v-if="!isAuthenticated">
          <RouterLink
            to="/register"
            class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-2 rounded-lg transition-all hover:shadow-md hover:scale-105"
          >
            Get Started
          </RouterLink>
        </li>
        <li v-else>
          <button
            @click="handleLogout"
            class="bg-gradient-to-r cursor-pointer from-red-500 to-red-600 text-white font-semibold px-6 py-2 rounded-lg transition-all hover:shadow-md hover:scale-105 hover:from-red-600 hover:to-red-700"
          >
            Logout
          </button>
        </li>
      </ul>

      <!-- Mobile Menu (Always Visible, Stacked Below on Small Screens) -->
      <ul class="md:hidden">
        <li v-if="!isAuthenticated">
          <!-- <RouterLink
            to="/register"
            class="block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-md w-full"
          >
            Get Started
          </RouterLink> -->
        </li>
        <li v-else>
          <button
            @click="handleLogout"
            class="block bg-gradient-to-r cursor-pointer from-red-500 to-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-md w-full hover:from-red-600 hover:to-red-700"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useAuth } from '../../composables/useAuth' // Adjust path as needed

const { user, signOut } = useAuth()
const router = useRouter()

const isAuthenticated = computed(() => !!user.value)

async function handleLogout() {
  await signOut()
  // Optionally redirect to home or login page
  router.push('/')
}
</script>

<style scoped>
/* Ensure smooth mobile transitions */
@media (max-width: 768px) {
  nav ul:last-of-type {
    animation: slideDown 0.3s ease-out;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>