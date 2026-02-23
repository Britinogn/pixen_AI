<template>
  <footer class="bg-[#0a0918] space-y-6 pt-12 border-t border-purple-500/10 text-center relative overflow-hidden">
    <!-- Subtle Background Glow (AI ethereal vibe) -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-purple-900/50 to-transparent"></div>
    </div>

    <section class="max-w-4xl mx-auto px-4 relative z-10">
      <!-- Brand & Tagline -->
      <div class="mb-6">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2 bg-linear-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text">
          Pixen AI
        </h2>
        <p class="text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          Unleash your creativity and generate stunning AI images instantly.
        </p>
      </div>

      <!-- Social Links -->
      <nav aria-label="Social media links" class="flex justify-center gap-6 flex-wrap">
        <a
          href="https://github.com/Britinogn"
          target="_blank"
          rel="noopener noreferrer"
          class="group w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-purple-500/30 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Follow Britinogn on GitHub"
        >
          <svg class="w-6 h-6 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- Uncomment for TMDb if needed -->
        <!-- <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="group w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Visit The Movie Database"
        >
          <svg class="w-6 h-6 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clip-rule="evenodd"
            />
          </svg>
        </a> -->

        <a
          href="https://www.linkedin.com/in/britinogn"
          target="_blank"
          rel="noopener noreferrer"
          class="group w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Connect with Britinogn on LinkedIn"
        >
          <svg class="w-6 h-6 text-white group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
      </nav>

      <!-- Copyright & Powered By -->
      <div class="text-sm text-white/70 space-y-2 pt-6 border-t border-purple-500/10">
        <p>
          &copy; {{ new Date().getFullYear() }} Pixen AI. All rights reserved.
        </p>
        <div class="flex items-center justify-center gap-2 text-xs">
          <span class="w-1 h-1 bg-linear-to-r from-purple-400 to-yellow-400 rounded-full animate-pulse"></span>
          <span>Powered by Gemini API (Nano Banana Edition)</span>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
// No additional JS needed—static with dynamic year
</script>

<style scoped>
/* Pulse animation for icons */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Ensure smooth transitions */
.group-hover :deep(svg) {
  animation: pulse 1.5s ease-in-out infinite;
}
</style>