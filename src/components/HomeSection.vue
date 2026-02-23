<template>
  <section class="bg-black min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative overflow-hidden">
    <!-- Animated Background linear (subtle AI wave) -->
    <div class="absolute inset-0 bg-linear-to-br from-purple-900 via-black to-blue-900 opacity-50 animate-pulse"></div>
    
    <!-- Welcome Text -->
    <Transition name="fade-slide">
      <div class="text-center md:text-left md:w-1/2 mb-8 md:mb-0 relative z-10" v-if="mounted">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text ">
          Welcome to Pixen AI
        </h1>
        <p class="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
          Unleash your creativity and generate stunning AI images instantly. Powered by cutting-edge Gemini models.
        </p>

        <!-- Get Started Button -->
        <RouterLink
          to="/register"
          class="inline-block bg-linear-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 relative z-10"
          aria-label="Get started with Pixen AI registration"
        >
          Get Started →
        </RouterLink>
        
        <!-- Powered By Badge -->
        <p class="mt-4 text-xs text-gray-500 flex items-center justify-center md:justify-start gap-2">
          <span class="w-4 h-4 bg-blue-500 rounded-full"></span>
          Powered by Google Gemini
        </p>
      </div>
    </Transition>

    <!-- Image Section -->
    <div class="md:w-1/2 flex justify-center relative z-10">
      <Transition name="fade-scale">
        <figure class="w-full max-w-md" v-if="mounted">
          <img
            src="/images/heroAi.png"
            alt="Showcase of AI-generated abstract neural network in vibrant colors, representing Pixen AI's image creation capabilities"
            class="rounded-2xl shadow-2xl object-cover w-full transition-all duration-500 hover:scale-105"
            loading="lazy"
          />
          <!-- AI Demo Overlay (Optional: Click to generate live) -->
          <!-- <button
            @click="triggerDemo"
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-white transition-all"
            aria-label="Generate a demo image with Pixen AI"
          >
            Try Demo ✨
          </button> -->
        </figure>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const mounted = ref(false)

// Fade-in on mount
onMounted(() => {
  mounted.value = true
})

// Optional: Integrate with your ImageGenerator (e.g., open modal)
// const triggerDemo = () => {
//   // TODO: Emit event to parent or router.push('/demo') to show ImageGenerator
//   alert('Launching Pixen AI demo—generate your first image!')  // Placeholder
// }
</script>

<style scoped>
/* Fade-slide animation for text */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.8s ease-out;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Fade-scale for image */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.6s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Hover animation for image */
img:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

/* Ensure full viewport height */
section {
  min-height: 100vh;
}
</style>