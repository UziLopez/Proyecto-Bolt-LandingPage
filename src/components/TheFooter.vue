<script setup lang="ts">
import FaroIcon from './FaroIcon.vue'

const redes = [
  {
    nombre: 'Instagram',
    href: '#',
    icon: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.24a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 10.9a4.3 4.3 0 110-8.6 4.3 4.3 0 010 8.6zm6.84-11.2a1.54 1.54 0 11-3.08 0 1.54 1.54 0 013.08 0z',
  },
  {
    nombre: 'Facebook',
    href: '#',
    icon: 'M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z',
  },
  {
    nombre: 'TikTok',
    href: '#',
    icon: 'M16.5 3c.3 2.1 1.6 3.6 3.5 3.9v2.4c-1.2.1-2.3-.2-3.5-.8v6.1a5.5 5.5 0 11-5.5-5.5c.3 0 .6 0 .9.1v2.5a3 3 0 102.1 2.9V3h2.5z',
  },
]
</script>

<template>
  <footer class="bg-tierra-900 text-arena">
    <div class="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-3 gap-10">
      <!-- Redes sociales -->
      <div>
        <h3 class="font-display text-lg text-vino-300 font-semibold mb-4">Síguenos</h3>
        <div class="flex gap-3">
          <a
            v-for="r in redes"
            :key="r.nombre"
            :href="r.href"
            :aria-label="r.nombre"
            class="w-10 h-10 rounded-full bg-tierra-800 hover:bg-vino-600 transition-colors flex items-center justify-center"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path :d="r.icon" />
            </svg>
          </a>
        </div>
        <p class="mt-4 text-sm text-tierra-200/80">@faroimaginario</p>
      </div>

      <!-- Contacto -->
      <div>
        <h3 class="font-display text-lg text-vino-300 font-semibold mb-4">Contacto</h3>
        <ul class="space-y-3 text-sm">
          <li class="flex items-center gap-3">
            <svg class="w-5 h-5 text-vino-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:hola@faroimaginario.mx" class="hover:text-vino-300 transition-colors">
              hola@faroimaginario.mx
            </a>
          </li>
          <li class="flex items-center gap-3">
            <svg class="w-5 h-5 text-vino-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
            </svg>
            <a href="tel:+524731234567" class="hover:text-vino-300 transition-colors">
              +52 473 123 4567
            </a>
          </li>
        </ul>
      </div>

      <!-- Logo -->
      <div class="flex flex-col items-start md:items-end">
        <div class="flex items-center gap-3">
          <FaroIcon class="h-12 w-8" />
          <div>
            <div class="font-display text-xl text-vino-300 font-semibold">Faro Imaginario</div>
            <div class="text-xs text-tierra-200/70">Manualidades Mexicanas</div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-tierra-800 py-5 text-center text-xs text-tierra-200/60">
      © {{ new Date().getFullYear() }} Faro Imaginario. Hecho con manos mexicanas.
    </div>
  </footer>
</template>
