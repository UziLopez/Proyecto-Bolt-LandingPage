<script setup lang="ts">
import FaroIcon from './FaroIcon.vue'
</script>

<template>
  <section
    id="inicio"
    class="relative min-h-[100svh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-tierra-100 via-arena to-tierra-200"
  >
    <!-- texturas sutiles -->
    <div class="absolute inset-0 opacity-30 pointer-events-none">
      <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-vino-200/40 blur-3xl" />
      <div class="absolute bottom-0 -right-32 w-[28rem] h-[28rem] rounded-full bg-tierra-300/40 blur-3xl" />
    </div>

    <div class="relative z-10 flex flex-col items-center text-center px-6 pt-24">
      <p class="text-vino-600 tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
        Manualidades Mexicanas
      </p>
      <h1 class="font-display text-5xl md:text-7xl text-vino-800 font-semibold leading-tight max-w-3xl">
        Faro Imaginario
      </h1>
      <p class="mt-6 max-w-xl text-tierra-800 text-base md:text-lg">
        Bordado, crochet y cerámica hechos a mano con raíces mexicanas.
        Piezas únicas y personalizables que iluminan cada rincón de tu hogar.
      </p>
    </div>

    <!-- Faro central -->
    <div class="relative z-10 mt-4 md:mt-2">
      <FaroIcon class="w-40 md:w-56 drop-shadow-2xl animate-float" />
    </div>

    <a
      href="#nosotros"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-vino-600 hover:text-vino-800 transition-colors"
    >
      <span class="text-xs uppercase tracking-widest mb-2">Descubre</span>
      <span class="w-px h-10 bg-vino-500 animate-pulse-line" />
    </a>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.animate-float {
  animation: float 4s ease-in-out infinite;
}
@keyframes pulse-line {
  0%, 100% { opacity: 0.4; transform: scaleY(0.9); }
  50% { opacity: 1; transform: scaleY(1); }
}
.animate-pulse-line {
  transform-origin: top;
  animation: pulse-line 2s ease-in-out infinite;
}
</style>
