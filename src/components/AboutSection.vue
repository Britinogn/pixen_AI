<template>
  <section class="bg-white min-h-screen py-16 px-6 relative overflow-hidden">
    <!-- Subtle Background Pattern (AI-inspired waves) -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-[200%] bg-[radial-linear(circle_at_20%_80%,rgba(255,165,0,0.1)_0%,transparent_50%),radial-linear(circle_at_80%_20%,rgba(255,20,147,0.1)_0%,transparent_50%)]"></div>
    </div>

    <!-- Header -->
    <Transition name="fade-down">
      <div class="text-center mb-12 relative z-10" v-if="mounted">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-linear-to-r from-yellow-500 via-orange-500 to-pink-500 bg-clip-text">
          About Pixen AI
        </h1>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Pixen AI is your creative companion for generating stunning AI-powered images. Transform your ideas into visual masterpieces with cutting-edge <strong>Gemini 2.5 Flash</strong> technology and intuitive tools—fast, fun, and limitless.
        </p>
        
        <!-- Powered By Badge -->
        <div class="mt-6 flex justify-center items-center gap-2 text-sm text-gray-500">
          <span class="w-2 h-2 bg-linear-to-r from-yellow-500 to-pink-500 rounded-full animate-pulse"></span>
          Powered by Google Gemini Nano Banana Edition
        </div>

        <!-- CTA Button -->
        <RouterLink
          to="/generator"
          class="inline-block mt-6 bg-linear-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          aria-label="Explore Pixen AI generator"
        >
          Start Creating →
        </RouterLink>
      </div>
    </Transition>

    <!-- Features Grid -->
    <TransitionGroup name="stagger-fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
      <!-- Feature 1 -->
      <div
        key="creative"
        class="bg-yellow-50 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 group"
        role="article"
        aria-labelledby="creative-title"
      >
        <div class="text-5xl mb-4 group-hover:animate-bounce">🎨</div>
        <h3 id="creative-title" class="text-xl font-semibold mb-2 text-gray-800">Creative Freedom</h3>
        <p class="text-gray-600">
          Generate unique AI art based on your prompts and let your imagination run wild with photorealistic or abstract styles.
        </p>
      </div>

      <!-- Feature 2 -->
      <div
        key="fast"
        class="bg-orange-50 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 group"
        role="article"
        aria-labelledby="fast-title"
      >
        <div class="text-5xl mb-4 group-hover:animate-pulse">⚡</div>
        <h3 id="fast-title" class="text-xl font-semibold mb-2 text-gray-800">Fast Generation</h3>
        <p class="text-gray-600">
          Get your AI images in seconds with optimized Gemini models—no waiting, just instant inspiration.
        </p>
      </div>

      <!-- Feature 3 -->
      <div
        key="edit"
        class="bg-pink-50 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-300 group"
        role="article"
        aria-labelledby="edit-title"
      >
        <div class="text-5xl mb-4 group-hover:rotate-12 transition-transform duration-300">🛠️</div>
        <h3 id="edit-title" class="text-xl font-semibold mb-2 text-gray-800">Easy Editing</h3>
        <p class="text-gray-600">
          Modify and refine generated images effortlessly—upload, tweak, and iterate with simple prompts.
        </p>
      </div>
    </TransitionGroup>

    <!-- Testimonials Carousel (Stub - Expand Later) -->
    <div class="mt-16 text-center relative z-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-8">What Creators Say</h2>
      <div class="flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory scrollbar-hide">
        <blockquote class="bg-gray-100 rounded-xl p-6 min-w-[280px] shrink-0 snap-center">
          <p class="text-gray-600 italic">"Pixen turned my wild ideas into pro art—Gemini magic!"</p>
          <cite class="block mt-2 text-sm font-semibold text-yellow-600">@ArtistX on X</cite>
        </blockquote>
        <blockquote class="bg-gray-100 rounded-xl p-6 min-w-[280px] shrink-0 snap-center">
          <p class="text-gray-600 italic">"Fast edits saved my deadline. Love the banana prompts!"</p>
          <cite class="block mt-2 text-sm font-semibold text-yellow-600">Designer Y</cite>
        </blockquote>
      </div>
    </div>
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
/* Fade-down for header */
.fade-down-enter-active {
  transition: all 0.8s ease-out;
}
.fade-down-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

/* Staggered fade for features */
.stagger-fade-enter-active {
  transition: all 0.6s ease;
}
.stagger-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.stagger-fade-move {
  transition: transform 0.5s ease;
}

/* Custom scrollbar hide for carousel */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Icon rotations and bounces (Tailwind doesn't have all, so custom) */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Optional: Media query for large screens */
@media (min-width: 1024px) {
  .stagger-fade-enter-active:nth-child(1) { transition-delay: 0.1s; }
  .stagger-fade-enter-active:nth-child(2) { transition-delay: 0.2s; }
  .stagger-fade-enter-active:nth-child(3) { transition-delay: 0.3s; }
}
</style>