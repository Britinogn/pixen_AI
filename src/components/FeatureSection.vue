<template>
  <section class="bg-gray-900 py-16 px-6 md:px-16 relative overflow-hidden">
    <!-- Subtle Particle Background (AI "neural" dots) -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-linear(circle_at_20%_80%,rgba(255,165,0,0.3)_0%,transparent_50%),radial-linear(circle_at_80%_20%,rgba(255,20,147,0.3)_0%,transparent_50%)]"></div>
    </div>

    <!-- Header -->
    <Transition name="fade-up">
      <div class="text-center mb-12 relative z-10" v-if="mounted">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 bg-linear-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text ">
          Features of Pixen AI
        </h2>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Powered by Gemini 2.5 Flash, Pixen AI turns your words into worlds—fast, creative, and endlessly editable.
        </p>
      </div>
    </Transition>

    <!-- Features Grid -->
    <TransitionGroup name="stagger-slide" tag="div" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
      <!-- Feature Card 1 -->
      <div
        key="gen"
        class="bg-black/80 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-gray-700/50"
        role="article"
        aria-labelledby="gen-title"
      >
        <div class="text-5xl mb-4 group-hover:animate-pulse">🎨</div>
        <h3 id="gen-title" class="text-xl font-semibold mb-3 text-yellow-400">AI Image Generation</h3>
        <p class="text-gray-300 mb-4 leading-relaxed">
          Create photorealistic or stylized images from text prompts using Gemini 2.5 Flash's Nano Banana mode—absurd ideas to pro art in seconds.
        </p>
        <RouterLink
          to="/generator"
          class="inline-block bg-linear-to-r from-yellow-500 to-orange-500 text-black font-semibold px-6 py-2 rounded-lg hover:shadow-md transition-all text-sm"
          aria-label="Try AI image generation"
        >
          Try It →
        </RouterLink>
      </div>

      <!-- Feature Card 2 -->
      <div
        key="edit"
        class="bg-black/80 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-gray-700/50"
        role="article"
        aria-labelledby="edit-title"
      >
        <div class="text-5xl mb-4 group-hover:animate-bounce">✏️</div>
        <h3 id="edit-title" class="text-xl font-semibold mb-3 text-yellow-400">Image Editing</h3>
        <p class="text-gray-300 mb-4 leading-relaxed">
          Upload images and modify them with AI-powered edits—like adding effects, transforming styles, or remixing with Gemini's multimodal magic.
        </p>
        <RouterLink
          to="/generator"
          class="inline-block bg-linear-to-r from-yellow-500 to-orange-500 text-black font-semibold px-6 py-2 rounded-lg hover:shadow-md transition-all text-sm"
          aria-label="Try image editing"
        >
          Try It →
        </RouterLink>
      </div>

      <!-- Feature Card 3 -->
      <div
        key="gallery"
        class="bg-black/80 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 group border border-gray-700/50"
        role="article"
        aria-labelledby="gallery-title"
      >
        <div class="text-5xl mb-4 group-hover:rotate-12 transition-transform duration-500">🖼️</div>
        <h3 id="gallery-title" class="text-xl font-semibold mb-3 text-yellow-400">Gallery & Sharing</h3>
        <p class="text-gray-300 mb-4 leading-relaxed">
          Save your creations to a personal gallery, share via links or social, and showcase your AI portfolio with one click.
        </p>
        <RouterLink
          to="/gallery"
          class="inline-block bg-linear-to-r from-yellow-500 to-orange-500 text-black font-semibold px-6 py-2 rounded-lg hover:shadow-md transition-all text-sm"
          aria-label="View gallery and sharing options"
        >
          Explore →
        </RouterLink>
      </div>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
</script>

<style scoped>
/* Fade-up for header */
.fade-up-enter-active {
  transition: all 0.8s ease-out;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

/* Staggered slide for cards */
.stagger-slide-enter-active {
  transition: all 0.6s ease;
}
.stagger-slide-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.stagger-slide-move {
  transition: transform 0.5s ease;
}

/* Custom animations */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Stagger delays for large screens */
@media (min-width: 768px) {
  .stagger-slide-enter-active:nth-child(1) { transition-delay: 0.1s; }
  .stagger-slide-enter-active:nth-child(2) { transition-delay: 0.2s; }
  .stagger-slide-enter-active:nth-child(3) { transition-delay: 0.3s; }
}
</style>